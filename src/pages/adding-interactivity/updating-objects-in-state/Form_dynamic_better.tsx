import { useState } from "react";

/*
原理说明
recurse 函数沿着 keys 数组递归，除了最后一层，每一层都用展开运算符 {...current} 创建浅拷贝，并通过动态属性 [key] 替换下一级对象。

对于不存在的中间对象（如路径中间某层为 undefined），
这里用 current[key] || {} 提供一个空对象，避免访问 undefined 的属性。实际项目中可根据需要更健壮地处理。

整个过程不会修改原对象，完全符合 React 不可变更新的要求。

这种方法可以优雅地处理任意深度的嵌套，无论增加多少层，只需用 . 连接路径作为 name 即可，无需修改 handleChange 逻辑。
 */
function setNestedValue(obj: Object, path: string, value: any) {
  const keys = path.split(".");
  //   console.log(keys);
  //   console.log(keys.length);
  function recurse(current: any, depth: number): any {
    // 边界条件
    if (depth === keys.length - 1) {
      return { ...current, [keys[depth]]: value };
    }
    const key = keys[depth];
    return {
      ...current,
      [key]: recurse(current[key] || {}, depth + 1),
    };
  }
  return recurse(obj, 0);
}

export default function Form_dynamic_better() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      location: {
        city: "Hamburg",
        country: "Germany",
        coords: {
          lat: 53.55,
          lng: 9.99,
        },
      },
      image: "https://react.dev/images/docs/scientists/Sd1AgUOm.jpg",
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setPerson((prev) => setNestedValue(prev, name, value));
  }

  return (
    <>
      <label>
        Name:
        <input name="name" value={person.name} onChange={handleChange} />
      </label>
      <label>
        Title:
        <input
          name="artwork.title"
          value={person.artwork.title}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          name="artwork.location.city"
          value={person.artwork.location.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Latitude:
        <input
          name="artwork.location.coords.lat"
          value={person.artwork.location.coords.lat}
          onChange={handleChange}
        />
      </label>
      <div>
        <i>{person.artwork.title}</i> by {person.name}
        <br />({person.artwork.location.city},{person.artwork.location.country}
        )
        <br />
        <img src={person.artwork.image} alt={person.artwork.title} />
      </div>
    </>
  );
}

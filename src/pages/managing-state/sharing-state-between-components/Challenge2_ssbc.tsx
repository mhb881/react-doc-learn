import { useState } from "react";

/*
在这个例子中，SearchBar 组件拥有一个用来控制输入框的 query 状态，它的父组件中展示了一个 List 组件，但是没有考虑搜索条件。

使用 filterItems(foods, query) 方法来通过搜索条件过滤列表项。为了测试修改是否正确，请尝试在输入框中输入 “寿司” ，“烤肉串” 或 “点心”。

可以看到 filterItems 已经自动引入了，所以不需要我们自己再引入了。

答案：
将 query 状态提升到 FilterableList 组件中。调用 filterItems(foods, query) 
方法获取过滤后的列表并将其传递给 List 组件。现在修改查询条件就会反映在列表中：
 */
interface Food {
  id: number;
  name: string;
  description: string;
}

export const foods: Food[] = [
  {
    id: 0,
    name: "寿司",
    description: "寿司是一道传统的日本菜，是用醋米饭做成的",
  },
  {
    id: 1,
    name: "木豆",
    description: "制作木豆最常见的方法是在汤中加入洋葱、西红柿和各种香料",
  },
  {
    id: 2,
    name: "饺子",
    description:
      "饺子是用未发酵的面团包裹咸的或甜的馅料，然后在沸水中煮制而成的",
  },
  {
    id: 3,
    name: "烤肉串",
    description: "烤肉串是一种很受欢迎的食物，是用肉串和肉块做成。",
  },
  {
    id: 4,
    name: "点心",
    description:
      "点心是广东人的传统喜好，是在餐馆吃早餐和午餐时喜欢吃的一系列小菜",
  },
];

export function SearchBar({
  query,
  onChange,
}: {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label>
      搜索： <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }: { items: Food[] }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id} className="flex flex-row gap-4">
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function FilterableList() {
  const [query, setQuery] = useState<string>("");

  function filterItems(items: Food[], query: string) {
    query = query.toLowerCase();
    return items.filter((item) =>
      item.name.split(" ").some((word) => word.toLowerCase().startsWith(query)),
    );
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  const filteredItems = filterItems(foods, query);

  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={filteredItems} />
    </>
  );
}

function Challenge2_pars() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 2 个挑战: 列表过滤</h1>
      <hr className="my-8 text-gray-300 " />
      <FilterableList />
    </div>
  );
}

export default Challenge2_pars;

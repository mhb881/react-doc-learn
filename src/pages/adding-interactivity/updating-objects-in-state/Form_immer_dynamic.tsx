import { produce } from "immer";
import { useCallback, useState } from "react";

export function Form_immer_dynamic() {
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

  // Immer 的 produce
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPerson(
      produce((draft) => {
        // 用点路径动态赋值（Immer 支持）
        const keys = name.split(".");
        let target: any = draft;
        // 直接到 name 指定的某个对象的属性上面去修改
        for (let i = 0; i < keys.length - 1; i++) {
          target = target[keys[i]];
        }
        target[keys[keys.length - 1]] = value;
      }),
    );
  }, []);

  return (
    <div className="flex  flex-col flex-1 gap-4">
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
    </div>
  );
}

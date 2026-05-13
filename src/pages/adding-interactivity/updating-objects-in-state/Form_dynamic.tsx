import { useState } from "react";

export default function Form_dynamic() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://react.dev/images/docs/scientists/Sd1AgUOm.jpg",
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setPerson((prev: any) => {
      if (name.includes(".")) {
        const [outer, inner] = name.split(".");
        return {
          ...prev,
          [outer]: {
            ...prev[outer],
            [inner]: value,
          },
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });

    return;
  }

  return (
    <>
      <label htmlFor="">
        Name:
        <input name="name" value={person.name} onChange={handleChange} />
      </label>
      <label htmlFor="">
        Title:
        <input
          name="artwork.title"
          value={person.artwork.title}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        City:
        <input
          name="artwork.city"
          value={person.artwork.city}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Image:
        <input
          name="artwork.image"
          value={person.artwork.image}
          onChange={handleChange}
        />
      </label>
      <div>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
        <div>
          <img src={person.artwork.image} alt={person.artwork.title} />
        </div>
      </div>
    </>
  );
}

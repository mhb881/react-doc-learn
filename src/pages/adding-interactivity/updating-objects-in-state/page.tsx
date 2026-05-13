import { useState } from "react";
import Form_dynamic from "./Form_dynamic";
import Form_dynamic_better from "./Form_dynamic_better";
import { Form_immer } from "./Form_immer";
export function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://react.dev/images/docs/scientists/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <div className="flex  flex-col flex-1 gap-4">
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <div>
        <img src={person.artwork.image} alt={person.artwork.title} />
      </div>
    </div>
  );
}

function UpdatingObjectsInStatePage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">更新 state 中的对象</h1>
      <hr className="my-8 text-gray-300 " />
      <Form />
      <hr className="my-8 text-gray-300 " />
      <Form_dynamic />
      <hr className="my-8 text-gray-300 " />
      <Form_dynamic_better />
      <hr className="my-8 text-gray-300 " />
      <Form_immer />
    </div>
  );
}

export default UpdatingObjectsInStatePage;

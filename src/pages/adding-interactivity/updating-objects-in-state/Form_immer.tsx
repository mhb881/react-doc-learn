import { produce } from "immer";
import { useCallback, useState } from "react";
import { useImmer } from "use-immer";

export function Form_immer() {
  const [person, setPerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://react.dev/images/docs/scientists/Sd1AgUOm.jpg",
    },
  });

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPerson(
        produce((draft) => {
          draft.name = e.target.value;
        }),
      );
    },
    [],
  );

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }

  const handleCityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPerson(
        produce((draft) => {
          draft.artwork.city = e.target.value;
        }),
      );
    },
    [],
  );

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson((draft) => {
      draft.artwork.image = e.target.value;
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

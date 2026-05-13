import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

function List_delete() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h2>振奋人心的雕塑家们：</h2>
      <ul className="flex flex-col gap-2">
        {artists.map((artist) => (
          <li key={artist.id} className="flex gap-2">
            {artist.name}{" "}
            <button
              className="primary-btn"
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List_delete;

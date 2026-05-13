import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const insertAt = 1; // 可能是任何索引
    const nextArtists = [
      // 插入点之前的元素：
      ...artists.slice(0, insertAt),
      // 新的元素：
      { id: nextId++, name: name },
      // 插入点之后的元素：
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName("");
  }

  return (
    <>
      <h1>振奋人心的雕塑家们：</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button className="primary-btn" onClick={handleClick}>
        插入
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.id} {artist.name}
          </li>
        ))}
      </ul>
    </>
  );
}

function List_insert() {
  return (
    <div>
      <List />
    </div>
  );
}

export default List_insert;

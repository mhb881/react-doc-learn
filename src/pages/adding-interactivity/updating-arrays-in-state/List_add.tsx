import { useState } from "react";

interface Artist {
  id: number;
  name: string;
}

// 作为 key 的索引
let nextId = 0;

export default function List_add() {
  const [name, setName] = useState<string>("");
  const [artists, setArtists] = useState<Artist[]>([]);

  return (
    <div>
      <h2>振奋人心的雕塑家们：</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className="primary-btn"
        onClick={() => {
          if (!name) return;
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        添加
      </button>
      <ul className="flex flex-col gap-2">
        {artists.map((artist) => {
          return (
            <li key={artist.id} className="flex gap-2">
              {artist.id + 1}. {artist.name}
              <button
                className="primary-btn"
                onClick={() => {
                  setArtists(() => {
                    return artists.filter((a) => a.id !== artist.id);
                  });
                }}
              >
                删除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

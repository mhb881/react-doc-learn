import { useState } from "react";

function Additem({ onAddItem }: { onAddItem: (title: string) => void }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Add an item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="primary-btn"
        onClick={() => {
          setTitle("");
          onAddItem(title);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Additem;

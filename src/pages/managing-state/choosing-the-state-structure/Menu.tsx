import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

type MenuItem = (typeof initialItems)[0];

function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const selectedItem = items.find((i) => i.id === selectedItemId);

  function handleItemChange(
    id: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, title: e.target.value };
        }
        return item;
      }),
    );
  }

  return (
    <div>
      <h2>What's your travel snack?</h2>
      <ul className="flex flex-col gap-2 mb-4">
        {items.map((i) => {
          return (
            <li key={i.id}>
              <input
                type="text"
                value={i.title}
                onChange={(e) => handleItemChange(i.id, e)}
              />
              <button
                className="primary-btn"
                onClick={() => setSelectedItemId(i.id)}
              >
                Choose
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-4">You picked {selectedItem?.title || "nothing"}</p>
    </div>
  );
}

export default Menu;

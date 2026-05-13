import type { ItemType } from "./Challenge2_chtss";

export default function PackingList({
  items,
  onChangeItem,
  onDeleteItem,
}: {
  items: {
    id: number;
    title: string;
    packed: boolean;
  }[];
  onChangeItem: (item: ItemType) => void;
  onDeleteItem: (itemId: number) => void;
}) {
  return (
    <ul className="flex flex-col gap-2 mt-2">
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-2">
          <label className="">
            <input
              type="checkbox"
              checked={item.packed}
              onChange={(e) => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked,
                });
              }}
            />{" "}
            {item.title}
          </label>
          <button className="primary-btn" onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

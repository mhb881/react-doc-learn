import { useState } from "react";

export default function AddTodo({
  onAddTodo,
}: {
  onAddTodo: (title: string) => void;
}) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="primary-btn ml-2"
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        添加
      </button>
    </>
  );
}

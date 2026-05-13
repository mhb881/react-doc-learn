import { useState } from "react";

export default function AddTask({
  onAddTask,
}: {
  onAddTask: (text: string) => void;
}) {
  const [text, setText] = useState("");
  

  return (
    <div className="mb-2">
      <input
        placeholder="添加任务"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="primary-btn"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        添加
      </button>
    </div>
  );
}

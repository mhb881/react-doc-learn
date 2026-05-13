import { useContext, useState } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  const tasks = useContext(TasksContext);
  const nextId = tasks[tasks.length - 1].id + 1;
  return (
    <div className="mb-2">
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="primary-btn"
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId,
            text: text,
          });
        }}
      >
        Add
      </button>
    </div>
  );
}

import { useState } from "react";
import type { TaskType } from "./page";

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: {
  tasks: TaskType[];
  onChangeTask: (task: TaskType) => void;
  onDeleteTask: (id: number) => void;
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({
  task,
  onChange,
  onDelete,
}: {
  task: TaskType;
  onChange: (task: TaskType) => void;
  onDelete: (id: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button className="primary-btn" onClick={() => setIsEditing(false)}>
          保存
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button className="primary-btn mx-2" onClick={() => setIsEditing(true)}>
          编辑
        </button>
      </>
    );
  }
  return (
    <label className="block my-2">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button className="primary-btn" onClick={() => onDelete(task.id)}>
        删除
      </button>
    </label>
  );
}

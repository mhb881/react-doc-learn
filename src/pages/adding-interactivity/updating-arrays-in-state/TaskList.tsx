import { useState } from "react";
import type { TodoItem } from "../../../types/types";

interface TaskListProps {
  todos: TodoItem[];
  onChangeTodo: (nextTodo: TodoItem) => void;
  onDeleteTodo: (todoId: number) => void;
}

interface TaskProps {
  todo: TodoItem;
  onChange: (nextTodo: TodoItem) => void;
  onDelete: (todoId: number) => void;
}

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
}: TaskListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button
          className="primary-btn ml-2"
          onClick={() => setIsEditing(false)}
        >
          保存
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button className="primary-btn ml-2" onClick={() => setIsEditing(true)}>
          编辑
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button className="primary-btn ml-2" onClick={() => onDelete(todo.id)}>
        删除
      </button>
    </label>
  );
}

import { useRef, useState } from "react";
import { flushSync } from "react-dom";

interface Todo {
  id: number;
  text: string;
}

let nextId = 0;
let initialTodos: Todo[] = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: "待办 #" + (i + 1),
  });
}

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const listRef = useRef<HTMLUListElement | null>(null);

  function handleAddTodo() {
    if (!listRef.current?.lastChild) return;
    const newTodo = { id: nextId++, text: text };
    flushSync(() => {
      setText("");
      setTodos([...todos, newTodo]);
    });
    (listRef.current.lastChild as HTMLElement).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <button className="primary-btn" onClick={handleAddTodo}>
          添加待办
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <ul ref={listRef}>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.id}.{todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

import { useState } from "react";
import { useImmer } from "use-immer";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";
import type { TodoItem } from "../../../types/types";

let nextId = 3;
const initialTodos: TodoItem[] = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export function TaskApp() {
  const [todos, updateTodos] = useImmer<TodoItem[]>(initialTodos);

  function handleAddTodo(title: string) {
    updateTodos((draft) => {
      draft.push({
        id: nextId++,
        title: title,
        done: false,
      });
    });
  }

  function handleChangeTodo(nextTodo: TodoItem) {
    updateTodos((draft) => {
      const todo = draft.find((t) => t.id === nextTodo.id);
      if (!todo) return;
      todo.title = nextTodo.title;
      todo.done = nextTodo.done;
    });
  }

  function handleDeleteTodo(todoId: number) {
    updateTodos((draft) => {
      const index = draft.findIndex((t) => t.id === todoId);
      draft.splice(index, 1);
    });
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

function Challenge4_uais() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 4 个挑战 共 4 个挑战: 使用 Immer 修复 mutation 的问题
      </h1>
      <hr className="my-8 text-gray-300 " />
      <TaskApp />
    </div>
  );
}

export default Challenge4_uais;

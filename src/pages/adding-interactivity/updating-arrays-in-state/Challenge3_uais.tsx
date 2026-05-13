/*
在下面的例子中，App.js 中所有的事件处理程序都会产生 mutation。
这导致编辑和删除待办事项的功能无法正常运行。
使用不会直接修改原始值的方法重写 handleAddTodo、handleChangeTodo 和 handleDeleteTodo 这三个函数：
 */

import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
import type { TodoItem } from "../../../types/types";

let nextId = 3;
const initialTodos: TodoItem[] = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export function TaskApp() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);

  function handleAddTodo(title: string) {
    const nextTodos = [
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ];

    setTodos(nextTodos);
  }

  function handleChangeTodo(nextTodo: TodoItem) {
    const nextTodos = todos.map((t) => {
      if (t.id === nextTodo.id) {
        return { ...t, title: nextTodo.title, done: nextTodo.done };
      } else return t;
    });
    setTodos(nextTodos);
  }

  function handleDeleteTodo(todoId: number) {
    const nextTodos = todos.filter((t) => t.id !== todoId);
    setTodos(nextTodos);
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

function Challenge3_uais() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 3 个挑战 共 4 个挑战: 使用不会直接修改原始值的方法修复 mutation
        的问题
      </h1>
      <hr className="my-8 text-gray-300 " />
      <TaskApp />
    </div>
  );
}

export default Challenge3_uais;

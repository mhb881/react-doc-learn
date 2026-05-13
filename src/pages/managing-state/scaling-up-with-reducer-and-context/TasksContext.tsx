import { createContext, useReducer, type ReactNode } from "react";
import type { TasksAction, TaskType } from "./page";

export const TasksContext = createContext<TaskType[]>([]);
export const TasksDispatchContext = createContext<
  (action: TasksAction) => void
>(() => {});

const initialTasks: TaskType[] = [
  { id: 0, text: "参观卡夫卡博物馆", done: true },
  { id: 1, text: "看木偶戏", done: false },
  { id: 2, text: "打卡列侬墙", done: false },
  { id: 3, text: "Philosopher’s Path", done: true },
  { id: 4, text: "Visit the temple", done: false },
  { id: 5, text: "Drink matcha", done: false },
];

function tasksReducer(tasks: TaskType[], action: TasksAction) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw new Error("未知 action: " + (action as { type: string }).type);
    }
  }
}

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

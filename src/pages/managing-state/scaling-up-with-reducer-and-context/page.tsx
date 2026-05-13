import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

export interface TaskType {
  id: number;
  text: string;
  done: boolean;
}

export type TasksAction =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: TaskType }
  | { type: "deleted"; id: number };

export function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

function ScalingUpWithReducerAndContextPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">使用 Reducer 和 Context 拓展你的应用</h1>
      <hr className="my-8 text-gray-300 " />
      <TaskApp />
    </div>
  );
}

export default ScalingUpWithReducerAndContextPage;

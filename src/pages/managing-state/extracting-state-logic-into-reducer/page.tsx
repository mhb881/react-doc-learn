import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

// 任务类型（无修改）
export interface TaskType {
  id: number;
  text: string;
  done: boolean;
}

let nextId = 3;
const initialTasks: TaskType[] = [
  { id: 0, text: "参观卡夫卡博物馆", done: true },
  { id: 1, text: "看木偶戏", done: false },
  { id: 2, text: "打卡列侬墙", done: false },
];

export function TaskApp() {
  // ✅ useReducer 自动推导类型
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    // ✅ dispatch 结构与 Action 类型完全匹配
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task: TaskType) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h2>布拉格的行程安排</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

// ==============================================
// 🔥 核心修复1：定义精确的 Action 联合类型（TS 关键）
// 替代原来宽泛的 { type: string; task: ... }
// ==============================================
type TaskAction =
  | { type: "added"; id: number; text: string } // 添加任务：带id、text
  | { type: "changed"; task: TaskType } // 修改任务：带完整task对象
  | { type: "deleted"; id: number }; // 删除任务：带任务id

// ==============================================
// 🔥 核心修复2：reducer 参数使用正确的 Action 类型
// 🔥 核心修复3：修正 reducer 内取值错误
// ==============================================
function tasksReducer(tasks: TaskType[], action: TaskAction): TaskType[] {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id, // ✅ 直接取action.id（不是action.task.id）
          text: action.text, // ✅ 直接取action.text
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task; // ✅ 完整task对象，类型匹配
        }
        return t;
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id); // ✅ 取action.id（不是action.task.id）
    }
    default: {
      throw new Error("未知 action: " + (action as { type: string }).type);
    }
  }
}

function ExtractingStateLogicIntoReducerPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">迁移状态逻辑至 Reducer 中</h1>
      <hr className="my-8 text-gray-300 " />
      <TaskApp />
    </div>
  );
}

export default ExtractingStateLogicIntoReducerPage;

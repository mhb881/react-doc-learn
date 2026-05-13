// 替换你的原有代码即可
import { useState } from "react";
import { sculptureList } from "./data";

// 全局数组：存储当前组件的所有 Hook 状态
let componentHooks: [any, (nextState: any) => void][] = [];
// 全局索引：记录当前正在调用的第几个 Hook
let currentHookIndex = 0;

function useStateSelf<S>(initialState: S) {
  // 1. 取当前索引对应的状态
  let pair = componentHooks[currentHookIndex];

  if (pair) {
    // 这不是第一次渲染
    // 所以 state pair 已经存在
    // 将其返回并为下一次 hook 的调用做准备
    currentHookIndex++;
    return pair;
  }

  const setMyState = (nextState: S) => {
    // 更新状态值
    // 支持函数式更新：传入回调则用旧状态计算新值
    // pair是 [state, setState]，所有我们这里更新的是 pair[0]的值
    pair[0] = typeof nextState === "function" ? nextState(pair[0]) : nextState;
    // 🔥 关键修复：触发 React 重新渲染
    triggerRender();
  };

  // 这是我们第一次进行渲染
  // 所以新建一个 state pair 然后存储它
  pair = [initialState, setMyState];

  // 存储状态，索引+1
  // 存储这个 pair 用于将来的渲染
  // 并且为下一次 hook 的调用做准备
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}

// 🔥 新增：React 渲染触发器（核心修复）
let triggerRender: () => void;

function Gallery() {
  // 每次调用 useState() 都会得到新的 pair
  // 第1个 Hook：索引0
  const [index, setIndex] = useStateSelf(0);
  // 第2个 Hook：索引1
  const [showMore, setShowMore] = useStateSelf(false);

  // 修复边界：防止索引超出数组长度
  const sculpture = sculptureList[index % sculptureList.length];

  function handleNextClick() {
    setIndex((prevIndex: number) => prevIndex + 1);
  }
  function handleMoreClick() {
    setShowMore((prevShowMore: boolean) => !prevShowMore);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <button
        className="primary-btn"
        onClick={handleNextClick}
        style={{ marginBottom: 10 }}
      >
        Next
      </button>
      <h3>
        {sculpture.name} by {sculpture.artist}
      </h3>
      <button
        className="primary-btn"
        onClick={handleMoreClick}
        style={{ marginBottom: 10 }}
      >
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        style={{ maxWidth: "400px" }}
      />
    </div>
  );
}

function updateDOM() {
  // 每次渲染组件前，要重置 Hook 索引（React 官方核心逻辑）
  currentHookIndex = 0;
}

function CustomizeState() {
  // 🔥 用 React 原生 useState 做渲染触发器
  const [, setRender] = useState({});
  triggerRender = () => setRender({});
  updateDOM();

  return <Gallery />;
}

export default CustomizeState;

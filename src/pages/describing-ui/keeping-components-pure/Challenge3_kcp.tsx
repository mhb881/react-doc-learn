/*
你所在公司的 CEO 要求你在在线时钟 app 中添加 “故事”，你不能拒绝。
你编写了一个 StoryTray 组件，它接受一个 stories 列表，后跟一个 “Create Story” 占位符。

你在作为 props 的 stories 数组末尾 push 了一个假故事来实现 “Create Story” 占位符。
但出于某种原因，“Create Story” 出现了不止一次。请修复这个问题。
 */
import { useState, useEffect } from "react";
import StoryTray from "./StoryTray";

const initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function App() {
  const [stories, setStories] = useState([...initialStories]);
  const time = useTime();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h2>现在是 {time.toLocaleTimeString()}。</h2>
      <StoryTray stories={stories} setStories={setStories} />
    </div>
  );
}

function Challenge3_kcp() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 3 个挑战 共 3 个挑战: 修复损坏的故事集</h1>
      <hr className="my-8 text-gray-300 " />
      <App />
    </div>
  );
}

export default Challenge3_kcp;

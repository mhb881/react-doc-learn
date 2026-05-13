/*
这个表单有几个 bug。试着点击几次增加分数的按钮。你会注意到分数并没有增加。
然后试着编辑一下名字字段，你会注意到分数突然“响应”了你之前的修改。最后，试着编辑一下姓氏字段，你会发现分数完全消失了。

你的任务就是修复所有的这些 bug。在你修复它们的同时，解释一下它们为什么会产生。

解答：
代码中 handlePlusClick 函数的问题在于它直接修改了 player 对象。
这就造成了 React 并不知道需要重新渲染的原因，也就没有更新屏幕上分数的值。
这就是为什么，当你修改名字字段的时候，state 发生了更新，state 更新触发了重新渲染，重新渲染同时也更新了屏幕上的分数。

代码中 handleLastNameChange 的问题在于它没有把 ...player 中已有的属性复制到新的对象中。因此，当你编辑姓氏字段时，分数就丢失了。
 */

import { useState } from "react";

export function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    setPlayer((prev) => ({
      ...prev,
      score: prev.score + 1,
    }));
  }

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer((prev) => ({
      ...prev,
      firstName: e.target.value,
    }));
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer((prev) => ({
      ...prev,
      lastName: e.target.value,
    }));
  }

  return (
    <div className="flex flex-col gap-4">
      {/* 👇 拆分label和按钮，杜绝hover穿透 */}
      {/* 原生 <button> + 你用了 w-auto h-auto，按钮变成了行内元素，hover 触发区域会和父元素 <label> 一样大 */}
      <div className="flex items-center gap-2">
        <label>
          Score: <b>{player.score}</b>
        </label>
        <button
          className="primary-btn cursor-pointer"
          onClick={handlePlusClick}
        >
          +1
        </button>
      </div>

      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </div>
  );
}
function Challenge1_uois() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 1 个挑战 共 3 个挑战: 修复错误的 state 更新代码
      </h1>
      <hr className="my-8 text-gray-300 " />
      <Scoreboard />
    </div>
  );
}

export default Challenge1_uois;

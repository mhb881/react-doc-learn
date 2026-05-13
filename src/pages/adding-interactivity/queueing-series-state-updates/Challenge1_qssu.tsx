/*
你正在开发一个艺术市场应用，该应用允许一个用户为一个艺术品同时提交多个订单。
每次用户按下“购买”按钮，“等待”计数器应该增加 1。三秒后，“等待”计数器应该减少，“完成”计数器应该增加。

但是，“等待”计数器的行为并不符合预期。当你按下“购买”按钮时，它会减少到 -1（这本应该是不可能的）。
如果你快速点击两次，两个计数器似乎都会出现无法预测的行为。

为什么会发生这种情况？修复两个计数器。
 */
import { useState } from "react";

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((prevPending) => prevPending + 1);
    await delay(1000);
    setPending((prevPending) => prevPending - 1);
    setCompleted((prevCompleted) => prevCompleted + 1);
  }

  return (
    <>
      <h3>等待：{pending}</h3>
      <h3>完成：{completed}</h3>
      <button className="primary-btn" onClick={handleClick}>
        购买
      </button>
    </>
  );
}

function Challenge1_qssu() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 2 个挑战: 修复请求计数器</h1>
      <hr className="my-8 text-gray-300 " />
      <RequestTracker />
    </div>
  );
}

export default Challenge1_qssu;

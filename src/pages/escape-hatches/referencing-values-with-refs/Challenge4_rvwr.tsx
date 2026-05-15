/*
在此示例中，当你按下“发送”后，在显示消息之前会有一小段延迟。
输入“你好”，按下发送，然后再次快速编辑输入。尽管你进行了编辑，提示框仍会显示“你好”（这是按钮被点击 那一刻 state 的值）。

通常，这种行为是你在应用程序中想要的。但是，有时可能需要一些异步代码来读取某些 state 的 最新 版本。
你能想出一种方法，让提示框显示 当前 输入文本而不是点击时的内容吗？
 */
import { useState, useRef } from "react";

export function Chat() {
  const [text, setText] = useState("");
  const textRef = useRef("");

  function handleSend() {
    setTimeout(() => {
      alert("正在发送：" + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          textRef.current = e.target.value;
          setText(e.target.value);
        }}
      />
      <button className="primary-btn" onClick={handleSend}>
        发送
      </button>
    </>
  );
}

function Challenge4_rvwr() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 4 个挑战 共 4 个挑战: 读取最新的 state</h1>
      <hr className="my-8 text-gray-300 " />
      <Chat />
    </div>
  );
}

export default Challenge4_rvwr;

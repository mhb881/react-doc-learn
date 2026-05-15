/*
输入消息并单击“发送”。你会注意到，在看到“已发送！”提示框之前有 3 秒的延迟。

在此延迟期间，你可以看到一个“撤消”按钮。点击它。这个“撤消”按钮应该阻止“发送！”消息弹出。

它通过调用 clearTimeout 来做到这点，这一步骤需要使用在 handleSend 时保存的 timeout ID。

但是，即使在单击“撤消”后，“已发送！”消息仍然出现。找出它不起作用的原因，然后修复它。

Hints:
像let timeoutID 这样的常规变量不会在重新渲染之间“存活”，因为每次渲染都从头开始运行你的组件（并初始化其变量）。
你应该将 timeout ID 保存在其他地方吗？

答案：
每当你的组件重新渲染时（例如当你设置 state 时），所有局部变量都会从头开始初始化。
这就是为什么你不能将 timeout ID 保存在像 timeoutID 这样的局部变量中，然后期望未来另一个事件处理器“看到”它。
相反，将它存储在一个 ref 中，React 将在渲染之间保留它。
 */
import { useRef, useState } from "react";

export function Chat() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const timeoutIdRef = useRef<number | undefined>(undefined);

  function handleSend() {
    setIsSending(true);
    timeoutIdRef.current = setTimeout(() => {
      alert("已发送！");
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutIdRef.current);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="primary-btn" disabled={isSending} onClick={handleSend}>
        {isSending ? "发送中……" : "发送"}
      </button>
      {isSending && (
        <button className="primary-btn" onClick={handleUndo}>
          撤销
        </button>
      )}
    </>
  );
}

function Challenge1_rvwr() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 4 个挑战: 修复坏掉的聊天输入框</h1>
      <hr className="my-8 text-gray-300 " />
      <Chat />
    </div>
  );
}

export default Challenge1_rvwr;

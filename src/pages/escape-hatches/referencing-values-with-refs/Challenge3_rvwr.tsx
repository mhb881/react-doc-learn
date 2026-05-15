import { useRef } from "react";
import ClickBallDemo from "./ClickBallDemo";

/*
在这个例子中，所有按钮点击处理器都是 “防抖的”。 要了解这意味着什么，请按下其中一个按钮。
注意消息在一秒后显示。如果你在等待消息时按下按钮，计时器将重置。
因此如果你多次快速单击同一个按钮，则直到你停止单击 之后 1 秒钟，该消息才会显示。
防抖可以让你将一些动作推迟到用户“停止动作”之后。

这个例子可以正常运行，但并不完全符合预期。按钮不是独立的。
要查看问题，请单击其中一个按钮，然后立即单击另一个按钮。你本来期望在延迟之后，你会看到两个按钮的消息。
但只有最后一个按钮的消息出现了。第一个按钮的消息丢失了。

为什么按钮会相互干扰呢？查找并修复问题。

因为原来的代码的 timeoutID 是全局的，
并且每一个 DebouncedButton 都会用到这一个全局变量，每一个按钮都可以刷新这个防抖时间
你需要做的就是将其改为用 useRef 来创建，这样每个 DebouncedButton 组件的 ref 都是互相独立的

 */

function DebouncedButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  const timeoutIdRef = useRef<number | undefined>(undefined);

  return (
    <button
      className="primary-btn"
      onClick={() => {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}

export function Dashboard() {
  return (
    <div className="flex flex-col gap-2 items-start">
      <DebouncedButton onClick={() => alert("宇宙飞船已发射！")}>
        发射宇宙飞船
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("汤煮好了！")}>
        煮点儿汤
      </DebouncedButton>
      <DebouncedButton onClick={() => alert("摇篮曲唱完了！")}>
        唱首摇篮曲
      </DebouncedButton>
    </div>
  );
}

function Challenge3_rvwr() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 3 个挑战 共 4 个挑战: 修复防抖</h1>
      <hr className="my-8 text-gray-300 " />
      <Dashboard />
      <hr className="my-8 text-gray-300 " />
      <ClickBallDemo />
    </div>
  );
}

export default Challenge3_rvwr;

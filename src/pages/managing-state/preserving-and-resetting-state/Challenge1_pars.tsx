/*
这个例子在你按下按钮时会展示一条消息，但同时也会意外地重置输入框。
为什么会发生这种情况？修复它，使按下按钮不再导致输入框文本重置。

答案：
问题在于 Form 被渲染在了不同的位置。在 if 分支里，Form 是 <div> 的第二个子组件，但在 else 分支里它是第一个子组件。
所以相同位置的组件类型发生了变化。
第一个位置时而包含一个 p，时而包含一个 Form；而第二个位置时而包含一个 Form，时而包含一个 button。
每当组件类型发生变化时， React 都会重置 state。

最简单的解决方案是将各个分支合并，这样 Form 就总会在相同位置渲染。
 */
import { useState } from "react";

export function App() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {showHint && (
        <p>
          <i>提示：你最喜欢的城市？</i>
        </p>
      )}
      <Form />
      <button
        className="primary-btn"
        onClick={() => {
          setShowHint(!showHint);
        }}
      >
        {showHint ? "隐藏提示" : "显示提示"}
      </button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}

function Challenge1_pars() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 5 个挑战: 修复丢失的输入框文本</h1>
      <hr className="my-8 text-gray-300 " />
      <App />
    </div>
  );
}

export default Challenge1_pars;

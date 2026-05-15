/*
这个按钮本该在显示“开”和“关”之间切换。但是，它始终显示“关”。这段代码有什么问题？修复它。
 */

import { useState } from "react";

export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      className="primary-btn"
      onClick={() => {
        setIsOn(!isOn);
      }}
    >
      {isOn ? "开" : "关"}
    </button>
  );
}

function Challenge2_rvwr() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 4 个挑战: 修复无法重新渲染的组件</h1>
      <hr className="my-8 text-gray-300 " />
      <Toggle />
    </div>
  );
}

export default Challenge2_rvwr;

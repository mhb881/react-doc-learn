/*
以下是一个人行道红绿灯组件，在按下按钮时会切换状态：
向 click 事件处理函数添加一个 alert 。当灯为绿色且显示“Walk”时，单击按钮应显示“Stop is next”。
当灯为红色并显示“Stop”时，单击按钮应显示“Walk is next”。

把 alert 方法放在 setWalk 方法之前或之后有区别吗？
 */

import { useState } from "react";

export function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    console.log(walk);
    alert(`${walk ? "Stop" : "Walk"} is next`);
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}

function Challenge1_ssns() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 1 个挑战: 实现红绿灯组件</h1>
      <hr className="my-8 text-gray-300 " />
      <TrafficLight />
    </div>
  );
}

export default Challenge1_ssns;

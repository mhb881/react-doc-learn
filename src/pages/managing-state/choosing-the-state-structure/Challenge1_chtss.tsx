/*
这个 Clock 组件接收两个属性：color 和 time。
当你在选择框中选择不同的颜色时，Clock 组件将从其父组件接收到一个不同的 color 属性。
然而，由于某种原因，显示的颜色没有更新。为什么？请修复这个问题。
 */

import ClockApp from "./ClockApp";

function Challenge1_chtss() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 4 个挑战: 修复一个未更新的组件</h1>
      <hr className="my-8 text-gray-300 " />
      <ClockApp />
    </div>
  );
}

export default Challenge1_chtss;

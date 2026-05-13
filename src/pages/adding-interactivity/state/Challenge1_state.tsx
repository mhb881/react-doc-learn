/*
当你在最后一个雕塑上按 “Next” 时，代码会发生崩溃。请修复逻辑以防止此崩溃。你可以尝试在事件处理函数中添加额外的逻辑，或在操作无法执行时禁用掉按钮。

修复崩溃后，添加一个显示上一个雕塑的 “Previous” 按钮。同样地，确保它不在第一个雕塑里发生崩溃。
 */

import { useState } from "react";
import { sculptureList } from "./data";

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // 状态修改逻辑，这两个flag可用作于禁用按钮
  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  // 这种实现就是循环图片，当处于最后一张时，会回到第一张；相反，
  function handleNextClick() {
    setIndex((index) => {
      return (index + 1) % sculptureList.length;
    });
  }

  function handlePreviousClick() {
    setIndex((index) => {
      if (index === 0) {
        return sculptureList.length - 1;
      } else return Math.abs(index - 1) % sculptureList.length;
    });
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button className="primary-btn mr-4" onClick={handlePreviousClick}>
        previous
      </button>
      <button className="primary-btn" onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button className="primary-btn" onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

function Challenge1_state() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 4 个挑战: 完成画廊组件</h1>
      <hr className="my-8 text-gray-300 " />
      <Gallery />
    </div>
  );
}

export default Challenge1_state;

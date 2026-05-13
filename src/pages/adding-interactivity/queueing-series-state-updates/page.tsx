import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    // 连续加3次
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button className="primary-btn" onClick={handleAdd}>
        +1
      </button>
    </div>
  );
}

function QueueingSeriesStateUpdatesPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">把一系列 state 更新加入队列</h1>
      <hr className="my-8 text-gray-300 " />
      <Counter />
    </div>
  );
}

export default QueueingSeriesStateUpdatesPage;

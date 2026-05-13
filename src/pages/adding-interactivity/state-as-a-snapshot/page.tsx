import { useState } from "react";

function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTimeout(() => {
      alert(`你对 ${to} 说了 ${message}`);
    }, 3000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-4"
    >
      <label htmlFor="">
        To:
        <select
          name=""
          id=""
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border cursor-pointer"
        >
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        className="border p-2"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="primary-btn" type="submit">
        发送
      </button>
    </form>
  );
}

export function Counter() {
  // 初始快照：count = 0
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("点击时的快照值：", count); // 输出：0（当前快照固定不变）

    // 预约下一张快照，不会修改当前值
    setCount(count + 1);

    // 重点：这里依然是旧快照！
    console.log("设置后的快照值：", count); // 还是输出：0

    // 定时器：捕获的是【点击瞬间的快照】
    setTimeout(() => {
      console.log("3秒后的快照值：", count); // 依然输出：0！
    }, 3000);
  }

  return (
    <div>
      <h1>计数：{count}</h1>
      <button className="primary-btn" onClick={handleClick}>点击+1</button>
    </div>
  );
}

function StateAsASnapShotPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10"></h1>
      <hr className="my-8 text-gray-300 " />
      <Form />
      <hr className="my-8 text-gray-300 " />
      <Counter />
    </div>
  );
}

export default StateAsASnapShotPage;

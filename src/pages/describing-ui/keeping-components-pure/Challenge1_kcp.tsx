/*
该组件尝试在午夜到早上 6 点期间，将 <h1> 的 CSS 类设置为 "night"，而在其他时间都设置为 "day"。但它不起作用。你能修复这个组件吗？

你可以临时更改计算机的时区来验证你的解决方案是否有效。当前时间位于午夜至早上六点之间时，时钟应该有相反的颜色！
 */

import { useEffect, useState } from "react";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Clock({ time }: { time: Date }) {
  const hours = time.getHours();
  //   if (hours >= 0 && hours <= 6) {
  //     // document.getElementById("time").className = "night";
  //   } else {
  //     // document.getElementById("time").className = "day";
  //   }
  return (
    <h1 id="time" className={hours >= 0 && hours <= 6 ? "night" : "day"}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

function App() {
  const time = useTime();
  return <Clock time={time} />;
}

function Challenge1_kcp() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 3 个挑战: 修复坏掉的时钟</h1>
      <hr className="my-8 text-gray-300 " />
      <App />
    </div>
  );
}

export default Challenge1_kcp;

import { useCallback, useState } from "react";

function getRandomColor() {
  const colors = [
    "#f87171",
    "#fb923c",
    "#facc15",
    "#4ade80",
    "#22d3ee",
    "#60a5fa",
    "#a78bfa",
    "#f472b6",
    "#fa2672",
    "#52248a",
  ];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function throttle(fn: Function, delay: number) {
  let shouldWait = false;
  return function (this: any, ...args: any[]) {
    if (!shouldWait) {
      fn.apply(this, args);
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false;
      }, delay);
    }
  };
}

function throttle_1(fn: Function, delay: number) {
  let lastTime = 0;
  return function (this: any, ...args: any[]) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

function debounce(fn: Function, delay: number) {
  let timeout: number | undefined;
  return function (this: any, ...args: any[]) {
    function effect(this: any) {
      timeout = undefined;
      fn.apply(this, args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(effect, delay);
  };
}

// 另一种实现
function debounce_1(fn: Function, delay: number) {
  let timeout: number | undefined;
  let isFirstCall = true;
  return function (this: any, ...args: any[]) {
    // 第一次调用立即执行（leading edge），后续调用全部变成尾部防抖。
    // 这个实现比较特殊，通常用于需要“页面初始化时立即执行一次，之后频繁操作只取最后一次结果”的场景。
    if (isFirstCall) {
      isFirstCall = false;
      fn.apply(this, args);
      return;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = undefined;
      fn.apply(this, args);
    }, delay);
  };
}

// 增强版防抖：支持 立即执行 / 延迟执行
function debounce_2(fn: Function, delay: number, immediate: boolean) {
  // 闭包变量：存储定时器ID
  // TS类型：初始为undefined，设置定时器后是数字（浏览器定时器返回number）
  let timeout: number | undefined;

  // 返回闭包函数：接收所有调用参数
  return function (this: any, ...args: any[]) {
    if (timeout) clearTimeout(timeout); // 核心：每次触发，清除上一个定时器（重新计时）
    // 分支1：立即执行模式
    if (immediate) {
      // 判断：是否是【首次触发/冷却结束】
      let firstRun = !timeout;

      // 设置定时器：delay毫秒后，清空timeout（解锁冷却）
      timeout = setTimeout(() => {
        timeout = undefined;
      }, delay);

      // 如果是首次触发，立刻执行函数
      if (firstRun) {
        fn.apply(this, args);
      }
      // 分支2：标准延迟执行模式（默认防抖逻辑）
    } else {
      // 新建定时器：delay毫秒后执行函数
      timeout = setTimeout(() => {
        timeout = undefined; // 执行后清空标记
        fn.apply(this, args);
      }, delay);
    }
  };
}

function Demo_Debounce() {
  const [clickCount, setClickCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [bgColor, setBgColor] = useState("#60a5fa");

  const debouncedEvent = useCallback(
    debounce(() => {
      setEventCount((prev) => prev + 1);
      setBgColor(getRandomColor());
    }, 1000),
    [],
  );

  const handleClickDebounce = () => {
    // 点击次数实时累加
    setClickCount((prev) => prev + 1);
    // 执行防抖后的逻辑
    debouncedEvent();
  };

  return (
    <section>
      <p>点击次数：{clickCount}</p>
      <p>事件次数：{eventCount}</p>
      <button className="primary-btn" onClick={handleClickDebounce}>
        点击我
      </button>
      <div
        style={{
          width: "240px",
          height: "240px",
          borderRadius: "16px",
          backgroundColor: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
          overflow: "hidden",
        }}
      >
        <img
          src="https://picsum.photos/200"
          alt="random"
          style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </section>
  );
}

function Demo_throttle() {
  const [clickCount, setClickCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [bgColor, setBgColor] = useState("#60a5fa");

  // ✅ 正确写法：只创建1次节流函数，用useCallback缓存
  const throttledEvent = useCallback(
    throttle(() => {
      setEventCount((prev) => prev + 1);
      setBgColor(getRandomColor());
    }, 1000),
    [],
  );

  // 点击处理函数
  const handleClickThrottle = () => {
    // 点击次数实时累加
    setClickCount((prev) => prev + 1);
    // 执行节流后的逻辑
    throttledEvent();
  };

  return (
    <section>
      <p>点击次数：{clickCount}</p>
      <p>事件次数：{eventCount}</p>
      <button className="primary-btn" onClick={handleClickThrottle}>
        点击我
      </button>
      <div
        style={{
          width: "240px",
          height: "240px",
          borderRadius: "16px",
          backgroundColor: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
          overflow: "hidden",
        }}
      >
        <img
          src="https://picsum.photos/200"
          alt="random"
          style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </section>
  );
}

export default function ClickBallDemo() {
  return (
    <>
      <h2>防抖示例</h2>
      <Demo_Debounce />
      <h2>节流示例</h2>
      <Demo_throttle />
    </>
  );
}

import { useEffect, useRef, useState } from "react";

export function StopWatch() {
  // 当前是否正在计时
  const [isRunning, setIsRunning] = useState(false);

  // 用于触发界面刷新
  const [now, setNow] = useState<number>(Date.now());

  // 本次开始计时的时间戳
  const startAtRef = useRef<number | null>(null);

  // 暂停前累计的总毫秒数
  const elapsedRef = useRef(0); // 累计运行时长

  // 定时器引用
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 开始 / 继续
  function handleStart() {
    if (isRunning) return;

    setIsRunning(true);
    startAtRef.current = Date.now();
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  // 暂停
  function handleStop() {
    if (!isRunning) return;

    setIsRunning(false);

    // 把本次运行时长累计进去
    if (startAtRef.current !== null) {
      elapsedRef.current += Date.now() - startAtRef.current;
      startAtRef.current = null;
    }

    // 清除定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  // 重置
  function handleReset() {
    handleStop();
    elapsedRef.current = 0;
    setNow(Date.now());
  }

  // 计算总秒数
  const secondsPassed =
    elapsedRef.current +
    (isRunning && startAtRef.current !== null ? now - startAtRef.current : 0);

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <h2>时间过去了：{(secondsPassed / 1000).toFixed(2)}</h2>

      <button
        className="primary-btn"
        onClick={handleStart}
        disabled={isRunning}
      >
        开始
      </button>

      <button
        className="primary-btn"
        onClick={handleStop}
        disabled={!isRunning}
      >
        停止
      </button>

      <button className="primary-btn" onClick={handleReset}>
        重置
      </button>
    </>
  );
}

function ReferencingValuesWithRefsPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">使用 ref 引用值</h1>
      <hr className="my-8 text-gray-300" />
      <StopWatch />
    </div>
  );
}

export default ReferencingValuesWithRefsPage;

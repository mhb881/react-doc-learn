/*
在这个挑战中，你将从头开始重新实现 React 的一小部分！这并不像听起来那么难。

滚动 sandbox 进行预览。请注意，它显示了 四个测试用例 。它们与你之前在本页上看到过的示例相对应。你的任务是实现 getFinalState 函数，让它为每种情况返回正确的结果。如果你对它进行了正确的实现的话，那么所有四个测试用例都应该会通过。

你将收到两个参数：baseState 是初始状态（例如：0），queue 是一个既包含数字（例如：5）也包含更新函数（例如：n => n + 1）的数组，这些数字和数组会被按照它们被添加进来的顺序排列。

你的任务是返回最终的 state，如同页面上的表格展示的那样！
 */

function increment(n: number) {
  return n + 1;
}
increment.toString = () => "n => n+1";

export function App() {
  return (
    <>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
    </>
  );
}

function TestCase({ baseState, queue, expected }: any) {
  const actual = getFinalState(baseState, queue);
  return (
    <>
      <p>
        初始 state：<b>{baseState}</b>
      </p>
      <p>
        队列：<b>[{queue.join(", ")}]</b>
      </p>
      <p>
        预期结果：<b>{expected}</b>
      </p>
      <p
        style={{
          color: actual === expected ? "green" : "red",
        }}
      >
        你的结果：<b>{actual}</b> ({actual === expected ? "正确" : "错误"})
      </p>
    </>
  );
}

export function getFinalState(baseState: any, queue: any[]) {
  let finalState = baseState;

  // TODO: 对队列做些什么...
  // 模拟 state 的队列更新
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    if (typeof item === "function") {
      finalState = item(finalState); // 更新函数
    } else {
      finalState = item; // 替换
    }
  }

  return finalState;
}

function Challenge2_qssu() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 2 个挑战: 自己实现状态队列</h1>
      <hr className="my-8 text-gray-300 " />
      <App />
    </div>
  );
}

export default Challenge2_qssu;

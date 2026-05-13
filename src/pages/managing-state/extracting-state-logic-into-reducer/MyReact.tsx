import { useState } from "react";

export function useReducer(reducer: any, initialState: any): [any, any] {
  const [state, setState] = useState(initialState);
  // reducer 是state的函数，用于根据action的type更新并返回state

  // 回想一下，reducer 函数接受两个参数——当前的 state 和 action 对象——并返回下一个 state。你的 dispatch 应该用它做什么？
  // 答案：dispatch 应该调用 reducer 函数，将当前的 state 和 action 作为参数，返回下一个 state
  function dispatch(action: any) {
    setState((prevState: any) => reducer(prevState, action));
  }

  return [state, dispatch];
}

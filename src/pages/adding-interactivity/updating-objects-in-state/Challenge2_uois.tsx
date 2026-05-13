/*
在静止的背景上有一个可以拖动的方形。你可以使用下拉框来修改方形的颜色。

但是这里有个 bug。当你先移动了方形，再去修改它的颜色时，背景会突然“跳”到方形所在的位置（实际上背景的位置并不应该发生变化！）。
但是这并不是我们想要的，Background 的 position 属性被设置为 initialPosition，也就是 { x: 0, y: 0 }。
为什么修改颜色之后，背景会移动呢？

如果有一些出乎意料的改变，就是 mutation，在 App.js 中找到 mutation 并修复它。

找到 bug 并修复它。

答案：
问题出在 handleMove 中的 mutation 。它直接修改了 shape.position，但是此时 initialPosition 所指向的也是同一个对象。
因此方形和背景都发生了移动。（因为它是 mutation，所以直到一个不相关更新——颜色变化——触发了一次重新渲染，变化才反映到屏幕上。）

修复问题的方法就是从 handleMove 中移除这个 mutation，然后用展开运算符来复制方形对象。
请注意 += 是 mutation 的一种，所以你需要对它进行重写来使用普通的 + 操作符。
 */

import { useState } from "react";
import Background from "./Background.js";
import Box from "./Box.js";
import type { Coordinates } from "../../../types/types";

const initialPosition: Coordinates = {
  x: 0,
  y: 0,
};

export function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx: number, dy: number) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    });
  }

  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select
        className="border rounded-2xl my-2 cursor-pointer"
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}

function Challenge2_uois() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 3 个挑战: 发现并修复 mutation</h1>
      <hr className="my-8 text-gray-300 " />
      <Canvas />
    </div>
  );
}

export default Challenge2_uois;

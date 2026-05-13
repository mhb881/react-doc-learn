/*
这里的例子和上面那段有 bug 的代码是相同的。这一次，试着用 Immer 来修复 mutation 的问题。
为了方便你的练习，useImmer 已经被引入了，因此你只需要修改 shape 这个 state 变量来使用它。
 */

import Background from "./Background.js";
import Box from "./Box.js";
import type { Coordinates } from "../../../types/types";
import { useImmer } from "use-immer";

const initialPosition: Coordinates = {
  x: 0,
  y: 0,
};

export function Canvas() {
  const [shape, updateShape] = useImmer({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx: number, dy: number) {
    updateShape((draft) => {
      draft.position = {
        x: draft.position.x + dx,
        y: draft.position.y + dy,
      };
    });
  }

  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    updateShape((draft) => {
      draft.color = e.target.value;
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

function Challenge3_uois() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 3 个挑战 共 3 个挑战: 使用 Immer 更新对象 </h1>
      <hr className="my-8 text-gray-300 " />
      <Canvas />
    </div>
  );
}

export default Challenge3_uois;

import { useState } from "react";
// 引入 clsx
import clsx from "clsx";

let initialShapes = [
  { id: 1, types: "circle", x: 50, y: 100 },
  { id: 2, types: "square", x: 100, y: 100 },
  { id: 3, types: "circle", x: 150, y: 100 },
];

export function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    setShapes((prev) =>
      prev.map((shape) =>
        shape.types === "circle" ? { ...shape, y: shape.y + 20 } : shape,
      ),
    );
  }

  return (
    <>
      <button className="primary-btn" onClick={handleClick}>
        所有圆形向下移动！
      </button>

      {shapes.map((shape) => (
        <div
          key={shape.id}
          // ✅ 用 clsx 优雅拼接/条件判断类名（Tailwind 静态类名）
          className={clsx(
            "absolute bg-purple-400 w-5 h-5 flex", // 公共样式
            shape.types === "circle" && "rounded-full", // 圆形：圆角
            shape.types === "square" && "rounded-none", // 方形：无圆角
          )}
          // ❌ 动态坐标 必须用 style（clsx 也救不了动态数值类名）
          style={{
            top: `${shape.y}px`,
            left: `${shape.x}px`,
          }}
        />
      ))}
    </>
  );
}

function List_transform() {
  return (
    <div className="relative h-50">
      <ShapeEditor />
    </div>
  );
}

export default List_transform;

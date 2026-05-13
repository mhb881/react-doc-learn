import { useState } from "react";

// 1. 定义坐标类型
import type { Coordinates } from "../../../types/types";

// 2. 定义组件Props类型（根据你的业务补充完整）
interface DragBoxProps {
  // 元素位置
  position: Coordinates;
  // 背景颜色
  color: string;
  // 移动回调函数
  onMove: (dx: number, dy: number) => void;
  // 子元素
  children?: React.ReactNode;
}

export default function Box({
  children,
  color,
  position,
  onMove,
}: DragBoxProps) {
  // 3. 定义状态：坐标对象 / null
  const [lastCoordinates, setLastCoordinates] = useState<Coordinates | null>(
    null,
  );

  // 4. 指针按下事件：React合成事件 + 绑定div元素
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // target是EventTarget，需断言为HTML元素才能调用setPointerCapture
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // 5. 指针移动事件
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  };

  // 6. 指针抬起事件
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setLastCoordinates(null);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: color,
        position: "absolute",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >
      {children}
    </div>
  );
}

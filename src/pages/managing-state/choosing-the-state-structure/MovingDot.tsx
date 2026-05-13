import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      className="relative w-100 h-100 bg-gray-100 border-2 border-gray-300 rounded-lg"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left - 10,
          y: e.clientY - rect.top - 10,
        });
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

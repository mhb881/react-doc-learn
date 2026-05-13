import "./Challenge1_rtiws.css";

import { useState } from "react";

/*
尝试实现当点击图片时删除外部 <div> 的 CSS class background--active，并将 picture--active 的 CSS class 添加到 <img> 上。
当再次点击背景图片时将恢复最开始的 CSS class。

视觉上，你应该期望当点击图片时会移除紫色的背景，并且高亮图片的边框。点击图片外面时高亮背景并且删除图片边框的高亮效果。
 */
export function Picture() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div
      className={`background ${isActive ? "background--active" : "rounded-full"}`}
      onClick={() => setIsActive(true)}
    >
      <img
        className={`picture ${isActive ? "" : "picture--active"}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://react.dev/images/docs/scientists/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(false);
        }}
      />
    </div>
  );
}

function Challenge1_rtiws() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 1 个挑战 共 3 个挑战: 添加和删除一个 CSS class{" "}
      </h1>
      <hr className="my-8 text-gray-300 " />
      <Picture />
    </div>
  );
}

export default Challenge1_rtiws;

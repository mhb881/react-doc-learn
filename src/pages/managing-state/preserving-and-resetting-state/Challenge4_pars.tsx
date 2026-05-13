/*
当你点击“下一张”时，浏览器会开始加载下一张图片。
但因为它是在相同的 <img> 标签中显示的，所以默认情况下，你在下一张图片加载完成前都会看到上一张图片。
如果文本必须始终与图片一一对应，那么这种特性可能并不是我们想要的。
调整它使得上一张图片在你点击“下一张”时立即被清除。

有没有办法让 React 重新创建 DOM 而不是复用它？用 key 来实现。

答案：
你可以为 <img> 提供一个 key。当 key 更改时，React 将从头开始重新创建 <img> DOM 节点。
这样会导致在每张图片加载时出现一个短暂的闪白，所以你不应该对你应用里的每张图片都这样做。
但是如果你想确保图片与文本始终匹配，那这么做就是合理的。
 */

import { Fragment, useState } from "react";

export interface Image {
  place: string;
  src: string;
}

let images: Image[] = [
  {
    place: "Penang, Malaysia",
    src: "https://react.dev/images/docs/scientists/FJeJR8M.jpg",
  },
  {
    place: "Lisbon, Portugal",
    src: "https://react.dev/images/docs/scientists/dB2LRbj.jpg",
  },
  {
    place: "Bilbao, Spain",
    src: "https://react.dev/images/docs/scientists/z08o2TS.jpg",
  },
  {
    place: "Valparaíso, Chile",
    src: "https://react.dev/images/docs/scientists/Y3utgTi.jpg",
  },
  {
    place: "Schwyz, Switzerland",
    src: "https://react.dev/images/docs/scientists/JBbMpWY.jpg",
  },
  {
    place: "Prague, Czechia",
    src: "https://react.dev/images/docs/scientists/QwUKKmF.jpg",
  },
  {
    place: "Ljubljana, Slovenia",
    src: "https://react.dev/images/docs/scientists/3aIiwfm.jpg",
  },
];

export function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <Fragment>
      <button className="primary-btn" onClick={handleClick}>
        下一张
      </button>
      <h3 className="text-2xl font-bold">
        {images.length} 张图片中的第 {index + 1} 张
      </h3>
      <img
        key={image.src}
        src={image.src}
        className="max-w-100 h-auto rounded-2xl"
      />
      <p className="text-lg font-bold">{image.place}</p>
    </Fragment>
  );
}

function Challenge4_pars() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 4 个挑战 共 5 个挑战: 清除正在加载的图片</h1>
      <hr className="my-8 text-gray-300 " />
      <Gallery />
    </div>
  );
}

export default Challenge4_pars;

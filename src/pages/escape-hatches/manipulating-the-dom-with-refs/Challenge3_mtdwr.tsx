/*
此图像轮播有一个“下一个”按钮，可以切换激活的图像。单击时使图库水平滚动到激活的图像。你需要在激活的图像的 DOM 节点上调用 scrollIntoView()：
 */

import { useCallback, useRef, useState } from "react";
import Challenge3_mtdwr_offical from "./Challenge3_mtdwr_offical";

interface Cat {
  id: number;
  imageUrl: string;
}

const catCount = 10;
const catList: Cat[] = new Array(catCount);
for (let i = 0; i < catCount; i++) {
  const bucket = Math.floor(Math.random() * catCount) % 2;
  let imageUrl = "";
  switch (bucket) {
    case 0: {
      imageUrl = "https://placecats.com/neo/250/200";
      break;
    }
    case 1: {
      imageUrl = "https://placecats.com/millie/250/200";
      break;
    }
    case 2:
    default: {
      imageUrl = "https://placecats.com/bella/250/200";
      break;
    }
  }
  catList[i] = {
    id: i,
    imageUrl,
  };
}

export function CatFriends() {
  const [index, setIndex] = useState(0);
  const itemRefs = useRef<Map<Cat, HTMLImageElement | null>>(null);

  const getMap = useCallback(() => {
    if (!itemRefs.current) {
      itemRefs.current = new Map();
    }
    return itemRefs.current;
  }, []);

  function handleScrollToIndex(nextIndex: number) {
    /*
    这里需要进行更新是因为
    handleScrollToIndex((index + 1) % catCount)
    中的 index 是 state 变量。
    如果你删掉 setIndex(index)，组件就不会因为点击而重新渲染，那么下一次点击时，
    闭包里拿到的还是旧的 index，通常还是初始值 0。
    结果就是：
    第一次点击：算出 1，滚到第 2 张
    第二次点击：还是算出 1，还是滚到第 2 张
    看起来就像“功能失效”了

    但是，这里 setIndex 是异步更新的，
    而 node 是能立即计算出来的。请注意这个区别。
    因为滚动逻辑根本没等 state 更新。
     */
    setIndex(nextIndex);
    console.log(nextIndex);
    console.log(catList[nextIndex]);
    const map = getMap();
    const node = map.get(catList[nextIndex]);
    console.log(node);
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }

  return (
    <>
      <nav className="flex flex-row  items-center justify-center mb-4">
        <button
          className="primary-btn"
          onClick={() => handleScrollToIndex((index + 1) % catCount)}
        >
          下一个
        </button>
      </nav>
      <div className="overflow-x-hidden w-[800px] mx-auto relative border-2 p-8 rounded-2xl ">
        <ul className="flex flex-row flex-nowrap gap-4 items-center p-2 w-max">
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={(node) => {
                  const map = getMap();
                  map.set(cat, node);

                  return () => {
                    map.delete(cat);
                  };
                }}
                className={`rounded-xl shadow-md ${index === i ? "border-3 border-amber-500 " : ""}`}
                src={cat.imageUrl}
                alt={"猫猫 #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function Challenge3_mtdwr() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 3 个挑战 共 4 个挑战: 滚动图像轮播</h1>
      <hr className="my-8 text-gray-300 " />
      <CatFriends />
      <hr className="my-8 text-gray-300 " />
      <h2>官方答案</h2>
      <Challenge3_mtdwr_offical />
    </div>
  );
}

export default Challenge3_mtdwr;

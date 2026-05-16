/*
此图像轮播有一个“下一个”按钮，可以切换激活的图像。单击时使图库水平滚动到激活的图像。你需要在激活的图像的 DOM 节点上调用 scrollIntoView()：

你可以声明一个 selectedRef，然后根据条件将它传递给当前图像：

<li ref={index === i ? selectedRef : null}>
当index === i时，表示图像是被选中的图像，相应的 <li> 将接收到 selectedRef。React 将确保 selectedRef.current 始终指向正确的 DOM 节点。

请注意，为了强制 React 在滚动前更新 DOM，flushSync 调用是必需的。否则，selectedRef.current将始终指向之前选择的项目。
 */

import { useRef, useState } from "react";
import { flushSync } from "react-dom";

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
  const selectedRef = useRef<HTMLImageElement | null>(null);

  return (
    <>
      <nav className="flex flex-row  items-center justify-center mb-4">
        <button
          className="primary-btn"
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1);
              } else {
                setIndex(0);
              }
            });
            selectedRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }}
        >
          下一个
        </button>
      </nav>
      <div className="overflow-x-hidden w-[800px] mx-auto relative border-2 p-8 rounded-2xl ">
        <ul className="flex flex-row flex-nowrap gap-4 items-center p-2 w-max">
          {catList.map((cat, i) => (
            <li key={cat.id}>
              <img
                ref={index === i ? selectedRef : null}
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

function Challenge3_mtdwr_offical() {
  return (
    <div className="p-6">
      <CatFriends />
    </div>
  );
}

export default Challenge3_mtdwr_offical;

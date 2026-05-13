/*
在这个示例中，切换复选框状态会修改传入每个 <PlaceImage> 的 imageSize 参数。
复选框的 state 保存在顶层的 App 组件中，但是每个 <PlaceImage> 都需要知晓它的值。

目前，App 将 imageSize 传递给 List，List 再将其传递给每个 Place，Place 又将其传递给 PlaceImage。
移除 imageSize 参数，并在 App 组件中直接将其传递给 PlaceImage。

你可以在 Context.js 中声明 context。

答案：
移除掉所有组件中的 imageSize 参数。

在 Context.js 中创建并导出 ImageSizeContext。然后用 <ImageSizeContext value={imageSize}> 包裹住整个列表来向下传递值，最后在 PlaceImage 中使用 useContext(ImageSizeContext) 来读取它。
 */
import { useContext, useState } from "react";
import { ImageSizeContext } from "./Challenge1Context";

interface PlaceType {
  id: number;
  name: string;
  description: string;
  imageId: string;
}

export const places: PlaceType[] = [
  {
    id: 0,
    name: "南非开普敦的波卡普区",
    description: "为房屋选择亮色的传统始于 20 世纪后期。",
    imageId: "K9HVAGH",
  },
  {
    id: 1,
    name: "中国台湾省台中市彩虹村",
    description:
      "1924 年，当地居民黄永福为了避免拆迁，将 1200 间房屋全部粉刷。",
    imageId: "9EAYZrt",
  },
  {
    id: 2,
    name: "墨西哥的帕丘卡宏观壁画",
    description: "世界上最大的壁画之一，覆盖了山坡上的房屋。",
    imageId: "DgXHVwu",
  },
  {
    id: 3,
    name: "巴西里约热内卢的塞拉龙楼梯",
    description:
      "这个地标由智利出生的艺术家 Jorge Selarón 创作，以“向巴西人民致敬”。",
    imageId: "aeO3rpI",
  },
  {
    id: 4,
    name: "意大利布拉诺",
    description: "这些房屋按照一个可追溯到 16 世纪的特定颜色系统进行粉刷。",
    imageId: "kxsph5C",
  },
  {
    id: 5,
    name: "摩洛哥舍夫沙万",
    description:
      "关于为什么房屋被涂成蓝色，有几种理论，包括这几种颜色可以驱蚊或者它象征着天空和天堂。",
    imageId: "rTqKo46",
  },
  {
    id: 6,
    name: "韩国釜山甘川文化村",
    description:
      "2009 年，该村通过粉刷房屋并举办展览和艺术装置而转变为文化中心。",
    imageId: "ZfQOOzf",
  },
];

function getImageUrl(place: PlaceType) {
  return "https://react.dev/images/docs/scientists/" + place.imageId + "l.jpg";
}

function PlaceImage({
  place,
  imageSize,
}: {
  place: PlaceType;
  imageSize: number;
}) {
  return (
    <img
      className="rounded-2xl"
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

function Place({ place }: { place: PlaceType }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <>
      <PlaceImage place={place} imageSize={imageSize} />
      <p className="">
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id} className="border border-gray-400 p-2.5 rounded-2xl">
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <ImageSizeContext.Provider value={imageSize}>
        <List />
      </ImageSizeContext.Provider>
    </>
  );
}

function Challenge1_pddwc() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 1 个挑战 共 1 个挑战: 用 context 替代逐层 props
      </h1>
      <hr className="my-8 text-gray-300 " />
      <App />
    </div>
  );
}

export default Challenge1_pddwc;

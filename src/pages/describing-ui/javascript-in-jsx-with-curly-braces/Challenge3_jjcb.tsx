/*
在下面的对象中，完整的图片 URL 被分成了四个部分：baseUrl、imageId、imageSize 和文件拓展名。

我们希望这些属性组合成图片的 URL：baseUrl（一直是 'https://i.imgur.com/'）、imageId（'7vQD0fP'）、imageSize（'s'）和文件拓展（总是 '.jpg'）。但是，<img> 标签 src 指明的方式是有问题的。

你能修复它吗？
 */

import { getImageUrl } from "./utils";

const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "b",
  theme: {
    backgroundColor: "gray",
    color: "white",
  },
};

export function TodoList() {
  return (
    <div
      style={person.theme}
      className="p-4 flex flex-col space-y-4 rounded-xl"
    >
      <h1>{person.name}'的待办事项</h1>
      {/* 或者 src={baseUrl + person.imageId + person.imageSize + '.jpg'} */}
      {/* 或者 src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`} */}
      <img
        className="rounded-full w-30 h-30"
        src={getImageUrl(person)}
        alt={person.name}
      />
      <ul>
        <li>优化视屏电话</li>
        <li>准备航空学课程</li>
        <li>研究乙醇燃料引擎</li>
      </ul>
    </div>
  );
}

function Challenge3_jjcb() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 3 个挑战 共 3 个挑战: 在 JSX 大括号内编写表达式
      </h1>
      <hr className="my-8 text-gray-300 " />
      <TodoList />
    </div>
  );
}

export default Challenge3_jjcb;

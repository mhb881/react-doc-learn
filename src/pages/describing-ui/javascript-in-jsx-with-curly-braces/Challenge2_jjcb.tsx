const person = {
  name: "Gregorio Y. Zara",
  avatar: "https://i.imgur.com/7vQD0fPs.jpg",
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
      <img
        className="rounded-full w-30 h-30"
        src={person.avatar}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>优化视屏电话</li>
        <li>准备航空学课程</li>
        <li>研究乙醇燃料引擎</li>
      </ul>
    </div>
  );
}

function Challenge2_jjcb() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 3 个挑战: 提取信息到对象中</h1>
      <hr className="my-8 text-gray-300 " />
      <TodoList />
    </div>
  );
}

export default Challenge2_jjcb;

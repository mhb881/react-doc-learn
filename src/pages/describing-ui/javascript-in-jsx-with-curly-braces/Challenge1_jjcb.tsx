const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "gray",
    color: "white",
  },
};

export function TodoList() {
  return (
    <div style={person.theme}>
      <h2>{person.name}'的待办事项</h2>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
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

function Challenge1_jjcb() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 3 个挑战: 修复错误 </h1>
      <hr className="my-8 text-gray-300 " />
      <TodoList />
    </div>
  );
}

export default Challenge1_jjcb;

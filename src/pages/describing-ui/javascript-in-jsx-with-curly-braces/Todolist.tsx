import Avatar from "./Avatar";

function formatDate(Date: Date) {
  return Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(Date);
}

const person = {
  name: "Gregorio Y. Zarajuan",
  theme: {
    backgroundColor: "gray",
    color: "black",
  },
};

function Todolist() {
  const today = new Date();
  return (
    <div
      style={person.theme}
      className="rounded-xl p-4 flex space-y-4 flex-col"
    >
      <h2>
        {person.name}'的代办事项 {formatDate(today)}
      </h2>
      <Avatar />
      <ul>
        <li>优化视屏电话</li>
        <li>准备航空学课程</li>
        <li>研究乙醇燃料引擎</li>
      </ul>
    </div>
  );
}

export default Todolist;

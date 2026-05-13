/*
两个 Profile 组件使用不同的数据并排呈现。在第一个资料中点击 “Collapse” 折叠，
然后点击 “Expand” 展开它。你会看到两个资料现在显示的是同一个人。这是一个 bug。

找出产生 bug 的原因，并修复它。
 */
import Profile from "./Profile.js";

export function App() {
  return (
    <>
      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson",
        }}
      />
    </>
  );
}

function Challenge2_kcp() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 3 个挑战: 修复损坏的资料</h1>
      <hr className="my-8 text-gray-300 " />
      <App />
    </div>
  );
}

export default Challenge2_kcp;

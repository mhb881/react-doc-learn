import CatFriends from "./CatFriends";
import Focus_input from "./Focus_input";

function ManipulatingTheDOMWithRefsPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">使用 ref 操作 DOM</h1>
      <hr className="my-8 text-gray-300 " />
      <h2>示例：聚焦输入框</h2>
      <Focus_input />
      <hr className="my-8 text-gray-300 " />
      <h2>示例：滚动到指定的元素</h2>
      <CatFriends />
      <hr className="my-8 text-gray-300 " />
      <h2>示例：使用 ref 回调管理 ref 列表</h2>
    </div>
  );
}

export default ManipulatingTheDOMWithRefsPage;

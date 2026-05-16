import CatFriends from "./CatFriends";
import CatFriends_ref_callback from "./CatFriends_ref_callback";
import Focus_child_input from "./Focus_child_input";
import Focus_input from "./Focus_input";
import TodoList from "./TodoList";

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
      <CatFriends_ref_callback />
      <hr className="my-8 text-gray-300 " />
      <h2>示例：聚焦子元素的输入框</h2>
      <Focus_child_input />
      <hr className="my-8 text-gray-300 " />
      <h2>示例：使用 flushSync 确保 DOM 操作同步</h2>
      <TodoList />
    </div>
  );
}

export default ManipulatingTheDOMWithRefsPage;

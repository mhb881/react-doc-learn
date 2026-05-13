import List_add from "./List_add";
import List_delete from "./List_delete";
import List_insert from "./List_insert";
import List_inverse from "./List_inverse";
import List_transform from "./List_transform";
import List_updateobj from "./List_updateobj";

function UpdatingArraysInStatePage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">更新 state 中的数组</h1>
      <hr className="my-8 text-gray-300 " />
      <List_add />
      <hr className="my-8 text-gray-300 " />
      <List_delete />
      <hr className="my-8 text-gray-300 " />
      <List_transform />
      <hr className="my-8 text-gray-300 " />
      <List_insert />
      <hr className="my-8 text-gray-300 " />
      <List_inverse />
      <hr className="my-8 text-gray-300 " />
      <List_updateobj />
    </div>
  );
}

export default UpdatingArraysInStatePage;

import Form_hotel from "./Form_hotel";
import Form_ticket from "./Form_ticket";
import Menu from "./Menu";
import MovingDot from "./MovingDot";
import TravelPlan from "./TravelPlan";
import TravelPlan_immer from "./TravelPlan_immer";

function ChoosingTheStateStructurePage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">选择 State 结构</h1>
      <hr className="my-8 text-gray-300 " />
      <h2 className="mb-10">合并 state 结构</h2>
      <MovingDot />
      <hr className="my-8 text-gray-300 " />
      <h2 className="mb-10">避免矛盾的 state</h2>
      <Form_hotel />
      <hr className="my-8 text-gray-300 " />
      <h2 className="mb-10">避免冗余的 state</h2>
      <Form_ticket />
      <hr className="my-8 text-gray-300 " />
      <h2 className="mb-10">避免重复的 state</h2>
      <Menu />
      <hr className="my-8 text-gray-300 " />
      <h2 className="mb-10">避免嵌套的 state</h2>
      <TravelPlan />
      <hr className="my-8 text-gray-300 " />
      <h2 className="mb-10">避免嵌套的 state (immer)</h2>
      <TravelPlan_immer />
    </div>
  );
}

export default ChoosingTheStateStructurePage;

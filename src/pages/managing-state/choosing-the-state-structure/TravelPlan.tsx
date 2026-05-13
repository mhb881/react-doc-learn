import { useState } from "react";
import { initialTravelPlan } from "./place";
import type { TravelPlanType } from "./place";

/*
CSS 的 font-weight 属性会被子元素继承
当 Earth、Moon、Mars 变成粗体（font-bold）时，它们的所有子元素也会继承这个粗体样式
解决方案：

给子元素的 <ol> 添加 font-normal 类
这样可以重置继承的粗体样式，确保只有 Earth、Moon、Mars 这三个项目是粗体
子元素会保持正常字体
 */

function PlaceTree({
  id,
  parentId,
  plan,
  onComplete,
}: {
  id: number;
  parentId: number;
  plan: TravelPlanType;
  onComplete: (parentId: number, childId: number) => void;
}) {
  const place = plan[id];
  const childIds = place.childIds;

  return (
    <li
      className={`mt-2 ml-4 ${id === 1 || id === 42 || id === 46 ? "font-bold" : ""}`}
    >
      <span className="mr-2">
        {place.id}. {place.title}
      </span>
      <button
        className="primary-btn"
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol className="ml-4 font-normal">
          {childIds.map((childId) => {
            return (
              <PlaceTree
                key={childId}
                id={childId}
                parentId={id}
                plan={plan}
                onComplete={onComplete}
              />
            );
          })}
        </ol>
      )}
    </li>
  );
}

function TravelPlan() {
  const [plan, setPlan] = useState<TravelPlanType>(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  function deleteNodeAndChildren(plan: TravelPlanType, id: number) {
    const childIds = plan[id]?.childIds || [];

    childIds.forEach((id) => deleteNodeAndChildren(plan, id));

    delete plan[id];
  }

  // 核心：完成/删除节点（从父节点移除 + 递归删除自身+后代）
  function handleComplete(parentId: number, childId: number) {
    if (!plan[parentId] || !plan[childId]) return;

    setPlan((prevPlan) => {
      // 1. 创建一份新的对象副本（遵循 React 不可变原则）
      const newPlan = { ...prevPlan };

      // 2. 更新父节点：从 childIds 中移除子节点 ID
      newPlan[parentId] = {
        ...newPlan[parentId],
        childIds: newPlan[parentId].childIds.filter((id) => id !== childId),
      };

      // 3. ✅ 核心：递归 delete 删除 childId 及其所有子孙节点（释放内存）
      deleteNodeAndChildren(newPlan, childId);

      // 4. 返回更新后的新对象
      return newPlan;
    });
  }

  return (
    <div>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => {
          return (
            <PlaceTree
              key={id}
              id={id}
              parentId={0}
              plan={plan}
              onComplete={handleComplete}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default TravelPlan;

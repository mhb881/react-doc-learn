import { initialTravelPlan } from "./place";
import type { TravelPlanType } from "./place";
import { useImmer } from "use-immer";

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
  const [plan, updatePlan] = useImmer<TravelPlanType>(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  function handleComplete(parentId: number, childId: number) {
    updatePlan((draft) => {
      const parent = draft[parentId];

      parent.childIds = parent.childIds.filter((id) => id !== childId);

      function deleteSelfAndAllChildren(id: number) {
        const place = draft[id];
        place.childIds.forEach((childId) => {
          deleteSelfAndAllChildren(childId);
        });
        delete draft[id];
      }
      deleteSelfAndAllChildren(childId);
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

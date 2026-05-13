/*
数组版本：
在 state 中保留一个 selectedIds 数组，而不是单个的 selectedId。
例如，如果你选择了第一个和最后一个信件，则它将包含 [0, 2]。当没有选定任何内容时，它将为空数组 []：

集合版本：
使用数组的一个小缺点是，对于每个项目，你都需要调用 selectedIds.includes(letter.id) 来检查它是否被选中。
如果数组非常大，则这可能会成为性能问题，因为带有 includes() 的数组搜索需要线性时间，并且你正在为每个单独的项目执行此搜索。

要解决这个问题，你可以在 state 中使用一个 Set 对象，它提供了快速的 has() 操作
Set 的查找操作是常量时间 O(1)，而数组的查找操作是线性时间 O(n)。因此，使用 Set 可以显著提高性能。
语言	    方法 / 操作	             平均复杂度	          最坏复杂度
JavaScript	Set.prototype.has()	    O(1)	            O(log n)
 */

import { useState } from "react";
import Letter_mulSelect from "./Letter_mulSelect";

const letters = [
  {
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
  },
  {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
  },
  {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
  },
];

export function MailClient() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedIdsSet, setSelectedIdsSet] = useState<Set<number>>(new Set());

  const selectedCount = selectedIds.length;
  const selectedCountSet = selectedIdsSet.size;

  function handleToggle(toggledId: number) {
    // 它以前是被选中的吗？
    if (selectedIds.includes(toggledId)) {
      // Then remove this ID from the array.
      setSelectedIds(selectedIds.filter((id) => id !== toggledId));
    } else {
      // 否则，增加 ID 到数组中。
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  function handleToggleSet(toggledId: number) {
    // Create a copy (to avoid mutation).
    const newSet = new Set(selectedIdsSet);
    if (newSet.has(toggledId)) {
      newSet.delete(toggledId);
    } else {
      newSet.add(toggledId);
    }
    setSelectedIdsSet(newSet);
  }

  return (
    <div>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => {
          return (
            <Letter_mulSelect
              key={letter.id}
              letter={letter}
              onToggle={handleToggleSet}
              isSelected={selectedIdsSet.has(letter.id)}
            />
          );
        })}
      </ul>
      <hr />
      <p>
        <b>You selected {selectedCount} letters</b>
      </p>
    </div>
  );
}

function Challenge4_better() {
  return <MailClient />;
}

export default Challenge4_better;

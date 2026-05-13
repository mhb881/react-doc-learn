/*
这个打包清单有一个页脚，显示了打包的物品数量和总共的物品数量。
一开始看起来似乎很好用，但是它也存在漏洞。例如，如果你将一个物品标记为已打包然后删除它，计数器就不会正确更新。
请修复计数器以使其始终正确。

虽然你可以仔细更改每个事件处理程序来正确更新 total 和 packed 计数器，但根本问题在于这些 state 变量一直存在。
它们是冗余的，因为你始终可以从 item 数组本身计算出物品（已打包或总共）的数量。
因此需要删除冗余 state 以修复错误
 */

import { useState } from "react";
import AddItem from "./Additem";
import PackingList from "./PackingList";

export interface ItemType {
  id: number;
  title: string;
  packed: boolean;
}

let nextId = 3;
const initialItems: ItemType[] = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];

export function TravelPlan() {
  const [items, setItems] = useState<ItemType[]>(initialItems);

  const total = items.length; // 可通过 items 数组的长度计算出总物品数量
  const packed = items.filter((item) => item.packed).length; // 可通过 filter 方法计算出已打包的物品数量

  function handleAddItem(title: string) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  function handleChangeItem(nextItem: ItemType) {
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      }),
    );
  }

  function handleDeleteItem(itemId: number) {
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr className="my-8 text-gray-300 " />
      <b>
        {packed} out of {total} packed!
      </b>
    </>
  );
}

function Challenge2_chtss() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 4 个挑战: 修复一个损坏的打包清单</h1>
      <hr className="my-8 text-gray-300 " />
      <TravelPlan />
    </div>
  );
}

export default Challenge2_chtss;

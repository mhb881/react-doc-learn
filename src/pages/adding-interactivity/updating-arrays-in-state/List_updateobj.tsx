import { useState } from "react"; // 导入了但没使用（冗余代码）
import { useImmer } from "use-immer"; // 核心：Immer 的 React 钩子

interface Arwork {
  id: number;
  title: string;
  seen: boolean;
}

let nextId = 3; // 预留的新增ID（代码中未使用）
const initialList = [
  // 初始清单数据
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export function BucketList() {
  // 用 useImmer 创建 两个独立的状态
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);

  // 切换「我的清单」勾选状态
  function handleToggleMyList(id: number, nextSeen: boolean) {
    updateMyList((draft) => {
      // 找到对应ID的艺术品
      const artwork = draft.find((a) => a.id === id);
      if (!artwork) return;
      // 直接修改草稿的属性！！（这是 Immer 最大的优势）
      artwork.seen = nextSeen;
    });
  }

  // 切换「你的清单」勾选状态
  function handleToggleYourList(id: number, nextSeen: boolean) {
    updateYourList((draft) => {
      // 1. 找到要修改的 item
      const artwork = draft.find((a) => a.id === id);
      if (!artwork) return;
      // 2. 直接改！不用拷贝！
      artwork.seen = nextSeen;
    });
  }

  /*
    原生写法：必须手动拷贝对象/数组
    function handleToggleMyList(id, nextSeen) {
    setMyList(prevList => 
        prevList.map(item => 
        item.id === id ? { ...item, seen: nextSeen } : item
        )
    );
    }
   */

  return (
    <>
      <h1>艺术愿望清单</h1>
      {/* 渲染两个清单，复用同一个子组件 */}
      <h2>我想看的艺术清单：</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />

      <h2>你想看的艺术清单：</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

// 接收两个参数：artworks(清单数据)、onToggle(勾选回调)
function ItemList({
  artworks,
  onToggle,
}: {
  artworks: Arwork[];
  onToggle: (id: number, nextSeen: boolean) => void;
}) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            {/* 复选框 */}
            <input
              type="checkbox"
              checked={artwork.seen} // 绑定状态：是否勾选
              onChange={(e) => {
                // 勾选时，触发父组件的更新函数
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

function List_updateobj() {
  return (
    <div>
      <BucketList />
    </div>
  );
}

export default List_updateobj;

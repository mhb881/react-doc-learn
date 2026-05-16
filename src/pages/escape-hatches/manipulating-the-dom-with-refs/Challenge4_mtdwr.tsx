/*
做到单击“搜索”按钮将焦点放在搜索域上。
请注意，每个组件都在单独的文件中定义，并且不能将其移出。如何将它们连接在一起？

答案：
你需要向 SearchButton 添加一个onClick 属性，SearchButton 会将其向下传递给浏览器原生 <button>。
你还要向下传递一个 ref 给 <SearchInput>，<SearchInput> 将转发 ref 给真正的 <input> 并对它进行赋值。
最后，在单击事件处理器中，你将能对存储在该 ref 中的 DOM 节点调用 focus。
 */

import { useRef } from "react";

export function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="primary-btn" onClick={onClick}>
      搜索
    </button>
  );
}

export function SearchInput({
  ref,
}: {
  ref: React.Ref<HTMLInputElement> | null;
}): React.ReactNode {
  return <input placeholder="找什么呢？" ref={ref} />;
}

export function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <nav>
        <SearchButton
          onClick={() => {
            inputRef.current?.focus();
          }}
        />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}

function Challenge4_mtdwr() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 4 个挑战 共 4 个挑战: 使分开的组件中的搜索域获得焦点
      </h1>
      <hr className="my-8 text-gray-300 " />
      <Page />
    </div>
  );
}

export default Challenge4_mtdwr;

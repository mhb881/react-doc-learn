import { useRef } from "react";

/*
做到单击“搜索”按钮时，使搜索域获得焦点。
 */
export function Page() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSearch() {
    inputRef.current?.focus();
  }

  return (
    <>
      <nav>
        <button className="primary-btn" onClick={handleSearch}>
          搜索
        </button>
      </nav>
      <input placeholder="找什么呢？" ref={inputRef} />
    </>
  );
}

function Challenge2_mtdwr() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 4 个挑战: 使搜索域获得焦点</h1>
      <hr className="my-8 text-gray-300 " />
      <Page />
    </div>
  );
}

export default Challenge2_mtdwr;

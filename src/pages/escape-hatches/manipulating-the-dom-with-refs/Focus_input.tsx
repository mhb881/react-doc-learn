import { useRef } from "react";

function Focus_input() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button className="primary-btn" onClick={handleFocus}>
        聚集输入框
      </button>
    </div>
  );
}

export default Focus_input;

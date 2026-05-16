import { useRef } from "react";

function MyInput({ ref }: { ref: React.Ref<HTMLInputElement> | null }) {
  return <input ref={ref} />;
}

export function MyForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>聚焦输入框</button>
    </>
  );
}

function Focus_child_input() {
  return (
    <div>
      <MyForm />
    </div>
  );
}

export default Focus_child_input;

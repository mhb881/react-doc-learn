/*
现在有两个独立的输入框。为了让它们保持同步：即编辑一个输入框时，另一个输入框也会更新相同的文本，反之亦然。
 */

import { useState } from "react";

export function SyncedInputs() {
  const [text, setText] = useState("");

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label="第一个输入框" text={text} onChange={handleTextChange} />
      <Input label="第二个输入框" text={text} onChange={handleTextChange} />
    </>
  );
}

function Input({
  label,
  text,
  onChange,
}: {
  label: string;
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label>
      {label} <input value={text} onChange={onChange} />
    </label>
  );
}

function Challenge1_pars() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 2 个挑战: 同步输入状态</h1>
      <hr className="my-8 text-gray-300 " />
      <SyncedInputs />
    </div>
  );
}

export default Challenge1_pars;

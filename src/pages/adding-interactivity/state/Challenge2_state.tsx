import { useState } from "react";

/*
当你输入字段时，什么也没有出现。这就像输入值被空字符串给“卡住”了。第一个 <input> 的 value 设置为始终匹配 firstName 变量，第二个 <input> 的 value 设置为始终匹配 lastName 变量。这是对的。两个输入框都有 onChange 事件处理函数，它尝试根据最新的用户输入（e.target.value）更新变量。但是，变量似乎并没有在重新渲染时“记住”它们的值。通过使用 state 变量来解决此问题。
 */
export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button className="primary-btn" onClick={handleReset}>Reset</button>
    </form>
  );
}

function Challenge2_state() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 4 个挑战: 修复卡住的输入表单</h1>
      <hr className="my-8 text-gray-300 " />
      <Form />
    </div>
  );
}

export default Challenge2_state;

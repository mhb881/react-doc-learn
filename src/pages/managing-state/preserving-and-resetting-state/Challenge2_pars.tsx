/*
这个表单可以让你输入姓氏和名字。它还有一个复选框控制哪个字段放在前面。当你勾选复选框时，“姓氏”字段将出现在“名字”字段之前。

它几乎可以正常使用，但有一个 bug。
如果你填写了“名字”输入框并勾选复选框，文本将保留在第一个输入框(也就是现在的“姓氏”)。
修复它，使得输入框文本在你调换顺序时 也 会跟着移动。

答案：
为 if 和 else 分支中的两个 <Field> 组件都指定一个 key。
这样可以告诉 React 如何为两个 <Field> “匹配”正确的状态——即使它们在父组件中的顺序会发生变化
 */

import { useState } from "react";

export function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      调换顺序
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field key="lastName" label="姓氏" />
        <Field key="firstName" label="名字" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key="firstName" label="名字" />
        <Field key="lastName" label="姓氏" />
        {checkbox}
      </>
    );
  }
}

function Field({ label }: { label: string }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}：
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}

function Challenge2_pars() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 5 个挑战: 交换两个表单字段</h1>
      <hr className="my-8 text-gray-300 " />
      <App />
    </div>
  );
}

export default Challenge2_pars;

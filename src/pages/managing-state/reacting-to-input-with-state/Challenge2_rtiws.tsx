import { useState } from "react";

/*
这是一个通过纯 JavaScript 和 DOM 实现的小型表单。先来随便使用一下来看看它有什么功能吧：
这个表单在两种模式间切换：编辑模式，你可以看到输入框；查看模式，你只能看到结果。
按钮的标签会根据你所处的模式在“编辑”和“保存”两者中切换。当你改变输入框的内容时，欢迎信息会最下面实时更新。

你的任务是在下方的沙盒中用 React 再次实现它。为了方便，标签已经转换为 JSX，但是你需要让它像原版那样显示和隐藏输入框。

也要确保它在底下更新文本内容！

答案：
你需要两个 state 变量来保存输入框中的内容：firstName 和 lastName。
同时你还会需要一个 isEditing 的 state 变量来保存是否显示输入框的状态。
你应该不需要 fullName 变量，因为全名可以由firstName 和 lastName 组合而成。

最终，你应该根据 isEditing 的值使用 条件渲染 来决定显示还是隐藏输入框。
 */
export function EditProfile() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <form action="" className="flex flex-col gap-2 items-center">
      <div>
        <label htmlFor="firstName" className="mr-4">
          First Name:
        </label>
        {isEditing ? (
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </div>
      <div>
        <label htmlFor="lastName" className="mr-4">
          Last Name:
        </label>
        {isEditing ? (
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </div>
      <button
        className="primary-btn"
        onClick={(e) => {
          e.preventDefault();
          setIsEditing(!isEditing);
        }}
      >
        {isEditing ? "Save" : "Edit"} Profile
      </button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}

function Challenge2_rtiws() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 3 个挑战: 个人信息编辑器</h1>
      <hr className="my-8 text-gray-300 " />
      <EditProfile />
    </div>
  );
}

export default Challenge2_rtiws;

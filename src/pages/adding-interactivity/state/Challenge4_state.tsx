/*
当按钮被点击时，这个例子应该询问用户的名字，然后显示一个 alert 欢迎他们。
你尝试使用 state 来保存名字，但由于某种原因，它显示“Hello, ！”，然后是“Hello, [name]!”，每次之后都使用以前的输入。

要修复此代码，请删除不必要的 state 变量。（我们将在稍后讨论为什么上述代码不起作用。）

你能解释为什么这个 state 变量是不必要的吗？
 */

export function FeedbackForm() {
  function handleClick() {
    const temp = prompt("What is your name?");
    if (temp === null) {
      return;
    }
    alert(`Hello, ${temp}!`);
  }

  return (
    <button className="primary-btn" onClick={handleClick}>
      Greet
    </button>
  );
}

function Challenge4_state() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 4 个挑战 共 4 个挑战: 移除不必要的 state</h1>
      <hr className="my-8 text-gray-300 " />
      <FeedbackForm />
    </div>
  );
}

export default Challenge4_state;

/*
解释：
首先这个功能是用户点击按钮，然后输入名字，最后通过 prompt 弹窗显示名字。
这个功能没有使用 state，因为 prompt 弹窗已经保存了名字，所以不需要使用 state 来保存名字。

那为什么添加 state 会导致错误呢？
是因为，当你通过 prompt 函数获取名字，然后通过 setName 函数更新 state，但是 state 此时并没有完成更新，
即 name 仍然保持之前的值，所以当你点击按钮时，会显示“Hello, ！

当整个 handleClick 函数结束的时候，name 才被更新为用户输入的名字，所以当你再次点击按钮时，会显示“Hello, [name]”

简单来说：
State 变量仅用于在组件重渲染时保存信息。在单个事件处理函数中，普通变量就足够了。当普通变量运行良好时，不要引入 state 变量。
 */

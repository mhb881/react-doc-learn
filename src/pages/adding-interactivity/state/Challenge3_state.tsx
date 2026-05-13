/*
这是一个收集用户反馈的小表单。当反馈被提交时，它应该显示一条感谢信息。
但是，现在它会发生崩溃并显示错误消息“渲染的 hooks 比预期的少”。你能发现错误并修复它吗？
 */

import { useState } from "react";

export function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button className="primary-btn" type="submit">Send</button>
      </form>
    );
  }
}

function Challenge3_state() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 3 个挑战 共 4 个挑战: 修复一个错误</h1>
      <hr className="my-8 text-gray-300 " />
      <FeedbackForm />
    </div>
  );
}

export default Challenge3_state;

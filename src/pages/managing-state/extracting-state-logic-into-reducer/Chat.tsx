import type { ContactType } from "./Challenge1_eslir";
import type { MessengerAction } from "./messageReducer";

export default function Chat({
  contact,
  message,
  dispatch,
}: {
  contact: ContactType;
  message: string;
  dispatch: (action: MessengerAction) => void;
}) {
  function handleSend() {
    alert(`正在发送 "${message}" 到 ${contact.email}`);
    dispatch({
      type: "edited_message",
      message: "",
    });
  }

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"和 " + contact.name + " 聊天"}
        onChange={(e) => {
          // TODO: 派发 edited_message
          // (从 e.target.value 获取输入框的值)
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button className="primary-btn" onClick={handleSend}>
        发送到 {contact.email}
      </button>
    </section>
  );
}

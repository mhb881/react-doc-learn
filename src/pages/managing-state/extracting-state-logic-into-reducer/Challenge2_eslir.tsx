/*
目前，点击 发送 没有任何反应。我们需要给 发送 按钮添加一个事件处理程序，它将：

显示一个包含收件人电子邮件和信息的 alert。
清空输入框。
 */
import { useReducer } from "react";
import Chat from "./Chat.tsx";
import { initialState, messengerReducer } from "./messageReducer.ts";
import ContactList from "./ContackList.tsx";

export interface ContactType {
  id: number;
  name: string;
  email: string;
}

const contacts: ContactType[] = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export function Messenger_2() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const messages = state.messages;
  const contact = contacts.find(
    (c) => c.id === state.selectedId,
  ) as ContactType; // 非空断言，确保 contact 存在

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={messages[contact.id]}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

function Challenge2_eslir() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 4 个挑战: 发送消息时清空输入框</h1>
      <hr className="my-8 text-gray-300 " />
      <Messenger_2 />
    </div>
  );
}

export default Challenge2_eslir;

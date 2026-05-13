/*
目前，ContactList.js 和 Chat.js 中的事件处理程序包含 // TODO 注释。这就是输入不起作用，点击按钮也不会改变收件人的原因。

将这两个 // TODO 替换为 dispatch 相应的 action。
// 如果要查看 action 的结构和类型，请查看 messengerReducer.js 中的 reducer。
// reducer 已经写好了，你不需要再修改它。你只需要在 ContactList.js 和 Chat.js 中 dispatch 相应的 action 即可。
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

export function Messenger() {
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

function Challenge1_eslir() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 1 个挑战 共 4 个挑战: 通过事件处理函数 dispatch actions
      </h1>
      <hr className="my-8 text-gray-300 " />
      <Messenger />
    </div>
  );
}

export default Challenge1_eslir;

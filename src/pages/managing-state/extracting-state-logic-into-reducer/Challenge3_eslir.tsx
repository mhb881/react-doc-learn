/*
在这个示例中，切换收件人时总是会清空输入框。

这是因为你不希望在多个收件人之间共享单个邮件草稿。
但如果你的应用程序能单独 “记住” 每个联系人的草稿，并在你切换联系人时恢复，那就更好了。

你的任务是改变状态的组织形式，以便能记住 每个联系人 的消息草稿。你需要对 reducer、初始状态和组件进行一些修改。

Hints:
你可以像下面这样组织 state：
export const initialState = {
  selectedId: 0,
  messages: {
    0: 'Hello, Taylor', // contactId = 0 的草稿
    1: 'Hello, Alice', // contactId = 1 的草稿
  }
};
这种 [key]: value 计算属性 可以帮你更新 messages 对象：
{
  ...state.messages,
  [id]: message
}
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

export function Messenger_3() {
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

function Challenge3_eslir() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 3 个挑战 共 4 个挑战: 切换 tab 时重置输入框内容
      </h1>
      <hr className="my-8 text-gray-300 " />
      <Messenger_3 />
    </div>
  );
}

export default Challenge3_eslir;

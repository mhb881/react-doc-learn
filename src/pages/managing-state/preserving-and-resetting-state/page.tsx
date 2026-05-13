import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

export interface ContactItem {
  id: number;
  name: string;
  email: string;
}

const contacts: ContactItem[] = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div className="flex gap-2">
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact: ContactItem) => setTo(contact)}
      />
      {/* 使用 key 来重置 Chat 组件的状态 */}
      <Chat key={to.id} contact={to} />
    </div>
  );
}

function PreservingAndResettingStatePage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">对 state 进行保留和重置</h1>
      <hr className="my-8 text-gray-300 " />
      <Messenger />
    </div>
  );
}

export default PreservingAndResettingStatePage;

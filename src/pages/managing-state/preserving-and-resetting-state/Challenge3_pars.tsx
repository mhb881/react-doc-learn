/*
这是一个可编辑的联系人列表。你可以编辑所选联系人的详细信息，然后点击“保存”进行更新或点击“重置”来撤消你的修改。

当你选中另一个联系人（比如 Alice），状态就会更新，但表单会一直显示之前那个联系人的详细信息。修复它，使表单在所选联系人改变时重置。
 */
import { useState } from "react";
import EditContact from "./EditContact.tsx";
import type { ContactItem } from "./page.tsx";
import ContactList_cha3 from "./ContactList_cha3.tsx";

const initialContacts: ContactItem[] = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);

  const selectedContact = contacts.find(
    (c) => c.id === selectedId,
  ) as ContactItem; // 声明非空

  function handleSave(updatedData: ContactItem) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList_cha3
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(id) => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedId}
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  );
}

function Challenge3_pars() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 3 个挑战 共 5 个挑战: 重置详情表单</h1>
      <hr className="my-8 text-gray-300 " />
      <ContactManager />
    </div>
  );
}

export default Challenge3_pars;

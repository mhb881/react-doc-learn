/*
在这个列表中每个 Contact 都有个 state 表示它的“显示邮箱”按钮是否已经按过了。
点击 Alice 的“显示邮箱”按钮，然后勾选“以相反的顺序显示”复选框。
你会注意到现在展开的是 Taylor 的 邮箱，而 Alice 的邮箱已经被移到底部并被收起了。

修复它，使得不管选中的顺序如何，expanded state 都与各个联系人相关联。

答案：
问题在于这个例子使用了 index 作为 key：

{displayedContacts.map((contact, i) =>
  <li key={i}>

然而你应该让 state 与 每个特定的联系人 相关联。

使用联系人的 ID 作为 key 就会修复这个问题：
 */
import { useState } from "react";
import Contact from "./Contact.tsx";
import type { ContactItem } from "./page.tsx";

const contacts: ContactItem[] = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];

export function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={(e) => {
            setReverse(e.target.checked);
          }}
        />{" "}
        以相反的顺序显示
      </label>
      <ul>
        {displayedContacts.map((contact, i) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}

function Challenge5_pars() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 5 个挑战 共 5 个挑战: 修复列表中错位的 state</h1>
      <hr className="my-8 text-gray-300 " />
      <ContactList />
    </div>
  );
}

export default Challenge5_pars;

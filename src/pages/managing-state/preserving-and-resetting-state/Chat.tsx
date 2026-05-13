import { useState } from "react";
import type { ContactItem } from "./page";

export default function Chat({ contact }: { contact: ContactItem }) {
  const [text, setText] = useState("");
  return (
    <section className="chat">
      <textarea
        className="resize"
        value={text}
        placeholder={"跟 " + contact.name + " 聊一聊"}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button className="primary-btn">发送到 {contact.email}</button>
    </section>
  );
}

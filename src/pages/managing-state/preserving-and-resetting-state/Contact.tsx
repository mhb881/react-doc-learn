import { useState } from "react";
import type { ContactItem } from "./page";

export default function Contact({ contact }: { contact: ContactItem }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        className="primary-btn"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "隐藏" : "显示"}邮箱
      </button>
    </div>
  );
}

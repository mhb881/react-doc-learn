import { useState } from "react";
import type { ContactItem } from "./page";

export default function EditContact({
  initialData,
  onSave,
}: {
  initialData: ContactItem;
  onSave: (updatedData: ContactItem) => void;
}) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  return (
    <section className="flex flex-col gap-4 mt-4">
      <label>
        名称：
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        邮箱：
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <div className="flex gap-2">
        <button
          className="primary-btn"
          onClick={() => {
            const updatedData = {
              id: initialData.id,
              name: name,
              email: email,
            };
            onSave(updatedData);
          }}
        >
          保存
        </button>
        <button
          className="primary-btn"
          onClick={() => {
            setName(initialData.name);
            setEmail(initialData.email);
          }}
        >
          重置
        </button>
      </div>
    </section>
  );
}

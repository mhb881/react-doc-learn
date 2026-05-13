import type { ContactItem } from "./page";

export default function ContactList_cha3({
  contacts,
  selectedId,
  onSelect,
}: {
  contacts: ContactItem[];
  selectedId: number;
  onSelect: (id: number) => void;
}) {
  return (
    <section className="mb-2">
      <ul className="flex flex-row gap-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className="primary-btn"
              onClick={() => {
                onSelect(contact.id);
              }}
            >
              {contact.id === selectedId ? (
                <b className="text-black">{contact.name}</b>
              ) : (
                contact.name
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

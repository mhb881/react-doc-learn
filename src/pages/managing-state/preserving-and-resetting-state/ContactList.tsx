import type { ContactItem } from "./page";

export default function ContactList({
  selectedContact,
  contacts,
  onSelect,
}: {
  selectedContact: ContactItem;
  contacts: ContactItem[];
  onSelect: (contact: ContactItem) => void;
}) {
  return (
    <section className="contact-list">
      <ul className="flex flex-col gap-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className="primary-btn"
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

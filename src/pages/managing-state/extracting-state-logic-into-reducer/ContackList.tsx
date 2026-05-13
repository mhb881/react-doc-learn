import type { ContactType } from "./Challenge1_eslir";
import type { MessengerAction } from "./messageReducer";

export default function ContactList({
  contacts,
  selectedId,
  dispatch,
}: {
  contacts: ContactType[];
  selectedId: number;
  dispatch: (action: MessengerAction) => void;
}) {
  return (
    <section className="contact-list">
      <ul className="flex flex-row gap-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className="primary-btn"
              onClick={() => {
                // TODO: 派发 changed_selection
                dispatch({
                  type: "changed_selection",
                  contactId: contact.id,
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

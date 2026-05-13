import type { Person } from "../../../types/types.js";
import { getImageUrl } from "../javascript-in-jsx-with-curly-braces/utils.js";
import Panel from "./Panel.js";

export default function Profile({ person }: { person: Person }) {
  return (
    <Panel>
      <Header name={person.name} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ name }: { name: string }) {
  return <h1>{name}</h1>;
}

function Avatar({ person }: { person: Person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

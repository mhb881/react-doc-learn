import { getImageUrl } from "../../../lib/utils";
import { people } from "./data";

export function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}因{person.accomplishment}而闻名世界
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function RenderingListsPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">渲染列表</h1>
      <hr className="my-8 text-gray-300 " />
      <List />
    </div>
  );
}

export default RenderingListsPage;

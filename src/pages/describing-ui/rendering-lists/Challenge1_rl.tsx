/*
下面的示例中有一个包含所有人员信息的列表。

请试着把它分成一前一后的两个列表：分别是 化学家们 和 其余的人。像之前一样，你可以通过 person.profession === '化学家' 这个条件来判断一个人是不是化学家。
 */
import { getImageUrl } from "../../../lib/utils";
import { people } from "./data";

export function List() {
  const chemists = people.filter((person) => person.profession === "化学家");

  const scientists = people.filter((person) => person.profession !== "化学家");

  const chemistsItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}因{person.accomplishment}而闻名世界
      </p>
    </li>
  ));

  const scientistsItems = scientists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}因{person.accomplishment}而闻名世界
      </p>
    </li>
  ));

  return (
    <article>
      <h1>化学家</h1>
      <ul>{chemistsItems}</ul>
      <h1>科学家</h1>
      <ul>{scientistsItems}</ul>
    </article>
  );
}

function Challenge1_rl() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 4 个挑战: 把列表一分为二</h1>
      <hr className="my-8 text-gray-300 " />
      <List />
    </div>
  );
}

export default Challenge1_rl;

/*
另一种答案
let chemists = [];
let everyoneElse = [];
people.forEach(person => {
  if (person.profession === '化学家') {
    chemists.push(person);
  } else {
    everyoneElse.push(person);
  }
});
优化更好
 */

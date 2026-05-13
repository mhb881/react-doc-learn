/*
RecipeList 组件的代码里嵌套了两层 map。出于简化代码的考虑，
我们提取出一个接受 id、name 和 ingredients 作为 props 的 Recipe 组件。
这种情况下，你会把外层的 key 放在哪里呢？原因是什么？
 */

import { recipes } from "./data";

function Recipe({
  id,
  name,
  ingredients,
}: {
  id: string;
  name: string;
  ingredients: string[];
}) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export function RecipeList() {
  return (
    <div>
      <h1>菜谱</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}

function Challenge3_rl() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 3 个挑战 共 4 个挑战: 把列表项提取成一个组件</h1>
      <hr className="my-8 text-gray-300 " />
      <RecipeList />
    </div>
  );
}

export default Challenge3_rl;

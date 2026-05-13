/*
请根据给你的数组生成菜谱列表！其中每个菜谱，都用 <h2> 来显示它的名称，并在 <ul> 里列出它所需的原料。
 */

import { recipes } from "./data";

function RecipeList() {
  const recipeItems = recipes.map((recipe) => {
    return (
      <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>菜谱</h1>
      {recipeItems}
    </div>
  );
}

function Challenge2_rl() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 4 个挑战: 嵌套列表</h1>
      <hr className="my-8 text-gray-300 " />
      <RecipeList />
    </div>
  );
}

export default Challenge2_rl;

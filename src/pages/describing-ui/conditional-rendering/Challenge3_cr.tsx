/*
这个 Drink 组件使用了一系列的 ? : 条件语句，根据 name 属性是 "tea" 还是 "coffee" 来显示不同的信息。
问题是，每个饮品的信息是在不同的条件判断里的。请去掉那三个 ? : 条件，使用一个 if 语句来重构这段代码。
 */

function Drink({ name }: { name: React.ReactNode }) {
  let partOfPlant = "";
  let caffeineContent = "";
  let age = "";
  if (name === "tea") {
    partOfPlant = "leaf";
    caffeineContent = "15–70 mg/cup";
    age = "4,000+ years";
  } else {
    partOfPlant = "bean";
    caffeineContent = "80–185 mg/cup";
    age = "1,000+ years";
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{partOfPlant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeineContent}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}

function Challenge3_cr() {
  return (
    <div className="p-6">
      <h1 className="mb-10">
        第 3 个挑战 共 3 个挑战: 用 if 和变量重构多余的 ? :
      </h1>
      <hr className="my-8 text-gray-300 " />
      <DrinkList />
    </div>
  );
}

export default Challenge3_cr;

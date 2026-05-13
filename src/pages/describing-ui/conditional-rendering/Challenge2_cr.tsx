/*
在这个例子里，每个 Item 接收一个名为 importance 的数字类型属性。使用 && 运算符渲染 “（重要性：X）”，以斜体呈现，但仅作用于那些难度值为非零的物品。你的物品列表后最终应该如下：

宇航服 （重要性: 9）
带金箔的头盔
Tam 的照片 （重要性: 6）
注意别忘了在这两个标签之间加上一个空格！
 */

function Item({
  name,
  importance,
}: {
  name: React.ReactNode;
  importance: number;
}) {
  return (
    <li className="item">
      {name}
      {importance > 0 && ""}
      {importance > 0 && <i className="badge">（重要性: {importance}）</i>}
    </li>
  );
}

export function PackingList() {
  return (
    <section>
      <h1>Sally Ride 的行李清单</h1>
      <ul>
        <Item importance={9} name="宇航服" />
        <Item importance={0} name="带金箔的头盔" />
        <Item importance={6} name="Tam 的照片" />
      </ul>
    </section>
  );
}

function Challenge2_cr() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 3 个挑战: 用 && 展示物品的重要性</h1>
      <hr className="my-8 text-gray-300 " />
      <PackingList />
    </div>
  );
}

export default Challenge2_cr;

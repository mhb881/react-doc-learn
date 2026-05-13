function Item({
  name,
  isPacked,
}: {
  name: React.ReactNode;
  isPacked: boolean;
}) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + " ✅"}</del>;
  }
  return <li className="item">{itemContent}</li>;
}

export function PackingList() {
  return (
    <section>
      <h1>Sally Ride 的行李清单</h1>
      <ul>
        <Item isPacked={true} name="宇航服" />
        <Item isPacked={true} name="带金箔的头盔" />
        <Item isPacked={false} name="Tam 的照片" />
      </ul>
    </section>
  );
}

function ConditionalRenderingPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">条件渲染</h1>
      <hr className="my-8 text-gray-300 " />
      <PackingList />
    </div>
  );
}

export default ConditionalRenderingPage;

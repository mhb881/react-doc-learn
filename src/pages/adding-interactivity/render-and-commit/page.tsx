export function Gallery() {
  return (
    <section>
      <h1>鼓舞人心的雕塑</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

function RenderAndCommitPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">渲染和提交</h1>
      <hr className="my-8 text-gray-300 " />
      <Gallery />
    </div>
  );
}

export default RenderAndCommitPage;

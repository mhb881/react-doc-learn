function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

function Gallery() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      <div className="flex flex-row gap-2">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}

const Challenge3_yfc = () => {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 3 个挑战 共 4 个挑战: 发现错误 </h1>
      <hr className="my-8 text-gray-300 " />
      <Gallery />
    </div>
  );
};

export default Challenge3_yfc;

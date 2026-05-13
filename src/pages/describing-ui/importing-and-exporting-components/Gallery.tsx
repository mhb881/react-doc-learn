import Profile from "./Profile";

function Gallery() {
  return (
    <section>
      <h1>了不起的科学家们</h1>
      <div className="flex flex-row gap-2">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}

export default Gallery;

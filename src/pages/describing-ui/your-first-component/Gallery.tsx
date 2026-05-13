import Profile from "./Profile";

export default function Gallery() {
  return (
    <div>
      <h2>Amazing scientists</h2>
      <div className="flex flex-row gap-2">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}

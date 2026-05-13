import Avatar from "./Avatar";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

function PassingPropsToComponentPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">将 Props 传递给组件</h1>
      <hr className="my-8 text-gray-300 " />
      <Profile />
    </div>
  );
}

export default PassingPropsToComponentPage;

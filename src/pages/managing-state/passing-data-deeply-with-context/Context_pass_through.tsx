import { useContext, type ReactNode } from "react";
import { LevelContext } from "./LevelContext";

function Heading({ children }: { children: ReactNode }) {
  const level = useContext(LevelContext);

  switch (level) {
    case 0:
      throw Error("Heading must be inside a Section!");
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("未知的 level：" + level);
  }
}

function Section({
  children,
  isFancy = false,
}: {
  children: ReactNode;
  isFancy?: boolean;
}) {
  const level = useContext(LevelContext);
  return (
    <section
      className={`p-2.5 m-1.25 rounded-2xl  border border-gray-400 ${isFancy ? "border-dashed border-pink-300 border-3" : ""}`}
    >
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

function Post({ title, body }: { title: string; body: string }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>最近的帖子</Heading>
      <Post title="里斯本的味道" body="...那些蛋挞！" />
      <Post title="探戈节奏中的布宜诺斯艾利斯" body="我爱它！" />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>帖子</Heading>
      <RecentPosts />
    </Section>
  );
}

export function Page() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="旅行者，你好！" body="来看看我的冒险。" />
      <AllPosts />
    </Section>
  );
}

function Context_pass_through() {
  return <Page />;
}

export default Context_pass_through;

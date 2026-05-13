import { useContext, type ReactNode } from "react";
import { LevelContext } from "./LevelContext";
import Context_noprops from "./Context_noprops";
import Context_pass_through from "./Context_pass_through";

export function Heading({ children }: { children: ReactNode }) {
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

export function Section({
  level,
  children,
}: {
  level: number;
  children: ReactNode;
}) {
  return (
    <section className="p-2.5 m-1.25 rounded-2xl  border border-gray-400">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}

export function Page() {
  return (
    <Section level={1}>
      <Heading>主标题</Heading>
      <Section level={2}>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Section level={3}>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Section level={4}>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

function PassingDateDeeplyWithContextPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">使用 Context 深层传递参数</h1>
      <hr className="my-8 text-gray-300 " />
      <h2>使用 context 的常见方法</h2>
      <Page />
      <hr className="my-8 text-gray-300 " />
      <h2>在相同的组件中使用并提供 context</h2>
      <Context_noprops />
      <hr className="my-8 text-gray-300 " />
      <h2>Context 会穿透中间层级的组件</h2>
      <Context_pass_through />
    </div>
  );
}

export default PassingDateDeeplyWithContextPage;

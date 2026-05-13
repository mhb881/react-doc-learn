import { useContext, type ReactNode } from "react";
import { LevelContext } from "./LevelContext";

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

export function Section({ children }: { children: ReactNode }) {
  // 1. 【使用Context】读取 上层组件 传下来的层级数字
  const level = useContext(LevelContext);
  return (
    <section className="p-2.5 m-1.25 rounded-2xl  border border-gray-400">
      {/* 2. 【提供Context】把 层级+1 传给 自己的子组件 */}
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

export function Page() {
  return (
    <Section>
      <Heading>主标题</Heading>
      <Section>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Section>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Section>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

function Context_noprops() {
  return <Page />;
}

export default Context_noprops;

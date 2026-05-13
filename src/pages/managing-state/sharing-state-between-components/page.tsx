import { useState } from "react";

function Panel({
  title,
  children,
  isActive,
  onShow,
}: {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
}) {
  return (
    <section className="p-2 border flex flex-col gap-2 items-start">
      <h3 className="font-bold text-lg">{title}</h3>
      {isActive && <p>{children}</p>}
      <button className="primary-btn" onClick={onShow}>
        展示
      </button>
    </section>
  );
}

export function Accordion() {
  const [isActive, setIsActive] = useState(0);

  return (
    <div>
      <h2>哈萨克斯坦，阿拉木图</h2>
      <Panel
        title="关于"
        isActive={isActive === 0}
        onShow={() => setIsActive(0)}
      >
        阿拉木图人口约200万，是哈萨克斯坦最大的城市。它在 1929 年到 1997
        年间都是首都。
      </Panel>
      <Panel
        title="词源"
        isActive={isActive === 1}
        onShow={() => setIsActive(1)}
      >
        这个名字来自于
        алма，哈萨克语中“苹果”的意思，经常被翻译成“苹果之乡”。事实上，阿拉木图的周边地区被认为是苹果的发源地，Malus
        sieversii 被认为是现今苹果的祖先。
      </Panel>
    </div>
  );
}

function SharingStateBetweenComponentsPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">在组件间共享状态</h1>
      <hr className="my-8 text-gray-300 " />
      <Accordion />
    </div>
  );
}

export default SharingStateBetweenComponentsPage;

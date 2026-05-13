// 第一步：修复拼写错误 Stroy → Story
import type { Story } from "../../../types/types";
import type { Dispatch, SetStateAction } from "react";
// 导入React正确的类型

// 第二步：修正 Props 类型定义（核心修复）
interface StoryTrayProps {
  stories: Story[];
  // 这是React useState返回的set函数的标准类型
  setStories: Dispatch<SetStateAction<Story[]>>;
}

export function StoryTray({ stories, setStories }: StoryTrayProps) {
  // 创建新故事（函数式更新，避免闭包问题）
  function createStories() {
    setStories((prevStories) => {
      return [
        ...prevStories,
        {
          id: prevStories.length + 1,
          label: `New Story ${prevStories.length + 1}`,
        },
      ];
    });
  }

  // ✅ 纯渲染：本地新建数组，添加占位符（不修改props，无副作用）
  const displayStories = [
    ...stories,
    { id: "create", label: "Create Story" }, // 固定占位符
  ];

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      <button className="primary-btn" onClick={createStories}>
        Create Story
      </button>
      {displayStories.map((story) => (
        <li key={story.id} style={{ margin: "8px 0" }}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}

export default StoryTray;

/*
请注意，每当时钟更新时，“Create Story” 都会被添加 两次。这暗示我们在渲染过程中发生了 mutation — 严格模式调用两次组件，可以使这些问题更加明显。

StoryTray 的功能不纯粹。通过在接收到的 stories 数组（一个 prop！）上调用 push 方法，
它正改变着一个在 StoryTray 渲染 之前 创建的对象。这使得它有问题并且难以预测。

你可以在 push 之前创建一个 新 数组（通过复制现有数组）：
export default function StoryTray({ stories }) {
  // 复制数组！
  const storiesToDisplay = stories.slice();

  // 不影响原始数组：
  storiesToDisplay.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {storiesToDisplay.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
这使你的 mutation 保持在局部，并使你的渲染函数保持纯粹。但你仍然需要小心：例如，当你想要更改数组的任意项时，必须先对其进行拷贝。

记住数组上的哪些操作会修改原始数组、哪些不会，这非常有帮助。
例如，push、pop、reverse 和 sort 会改变原始数组，但 slice、filter 和 map 则会创建一个新数组。
 */

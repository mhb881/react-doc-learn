/*
有一个 letters 列表在 state 中。当你悬停或聚焦到特定的信件时，它会被突出显示。
当前突出显示的信件存储在 highlightedLetter state 变量中。
你可以“Star”和“Unstar”单个信件，这将更新 state 中的 letters 数组。

虽然这段代码可以运行，但是有一个小的 UI 问题。当你点击“Star”或“Unstar”时，高亮会短暂消失。
不过只要你移动鼠标指针或者用键盘切换到另一个信件，它就会重新出现。为什么会这样？请修复它，使得在按钮点击后高亮不会消失。
 */
/*
答案：

这个问题点在于你将信件对象存储在 highlightedLetter 中。但是，你也将相同的信息存储在 letters 数组中。
因此，你的 state 存在重复！当你在按钮点击后更新 letters 数组时，会创建一个新的信件对象，
它与 highlightedLetter 不同。这就是 highlightedLetter === letter 执行变为 false，并且高亮消失的原因。
当指针移动时下一次调用 setHighlightedLetter 时它会重新出现。

为了解决这个问题，请从 state 中删除重复项。不要在两个地方存储 信件对象本身，而是存储 highlightedId。
然后，你可以使用 letter.id === highlightedId 检查每个带有 isHighlighted 属性的信件，
即使 letter 对象在上次渲染后发生了变化，这也是可行的。
 */

import { useState } from "react";
import Letter from "./Letter";

export interface LetterType {
  id: number;
  subject: string;
  isStarred: boolean;
}

const initialLetters: LetterType[] = [
  {
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
  },
  {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
  },
  {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
  },
];

export function MailClient() {
  const [letters, setLetters] = useState<LetterType[]>(initialLetters);
  // 避免重复 state 变量那一节就是答案
  const [highlightedId, setHighlightedId] = useState<number | null>(null);
  // const highlightedItem = letters.find((letter) => letter.id === highlightedId);

  function handleHover(letter: LetterType) {
    setHighlightedId(letter.id);
  }

  function handleStar(starred: LetterType) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starred.id) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      }),
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedId}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}

function Challenge3_chtss() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 3 个挑战 共 4 个挑战: 修复消失的选项</h1>
      <hr className="my-8 text-gray-300 " />
      <MailClient />
    </div>
  );
}

export default Challenge3_chtss;

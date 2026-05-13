/*
在这个例子中，每个 Letter 都有一个 isSelected prop 和一个 onToggle 处理程序来标记它为选定 state。
这样做是有效的，但是 state 被存储为 selectedId（也可以是 null 或 ID），因此任何时候只能选择一个 letter。

你需要将 state 结构更改为支持多选功能。（在编写代码之前，请考虑如何构建它。）
每个复选框应该独立于其他复选框。单击已选择的项目应取消选择。
最后，页脚应显示所选项目的正确数量。
 */

import { useState } from "react";
import Letter_mulSelect from "./Letter_mulSelect";
import Challenge4_better from "./Challenge4_better";

export interface LetterType {
  id: number;
  subject: string;
  isStarred: boolean;
  isSelected?: boolean;
}

export const initLetters: LetterType[] = [
  {
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
    isSelected: false,
  },
  {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
    isSelected: false,
  },
  {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
    isSelected: false,
  },
];

export function MailClient() {
  const [letters, setLetters] = useState<LetterType[]>(initLetters);

  // TODO: 支持多选
  const selectedCount = letters.filter((letter) => letter.isSelected).length;

  function handleToggle(toggledId: number) {
    // TODO: 支持多选
    setLetters((prev) => {
      return prev.map((letter) => {
        if (letter.id === toggledId) {
          return {
            ...letter,
            isSelected: !letter.isSelected,
          };
        }
        return letter;
      });
    });
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter_mulSelect
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: 支持多选
              letter.isSelected
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}

function Challenge4_chtss() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 4 个挑战 共 4 个挑战: 实现多选功能</h1>
      <hr className="my-8 text-gray-300 " />
      <MailClient />
      <hr className="my-8 text-gray-300 " />
      <Challenge4_better />
    </div>
  );
}

export default Challenge4_chtss;

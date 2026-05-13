import type { LetterType } from "./Challenge3_chtss";

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: {
  letter: LetterType;
  isHighlighted: boolean;
  onHover: (letter: LetterType) => void;
  onToggleStar: (letter: LetterType) => void;
}) {
  return (
    <li
      className={`rounded-xl px-2 py-1 ${isHighlighted ? "bg-blue-300" : ""}`}
      onFocus={() => {
        onHover(letter);
      }}
      onPointerMove={() => {
        onHover(letter);
      }}
    >
      <button
        className="primary-btn mr-2"
        onClick={() => {
          onToggleStar(letter);
        }}
      >
        {letter.isStarred ? "Unstar" : "Star"}
      </button>
      {letter.subject}
    </li>
  );
}

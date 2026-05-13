import type { LetterType } from "./Challenge4_chtss";

export default function Letter_mulSelect({
  letter,
  onToggle,
  isSelected,
}: {
  letter: LetterType;
  onToggle: (id: number) => void;
  isSelected?: boolean;
}) {
  return (
    <li className={isSelected ? "selected" : ""}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  );
}

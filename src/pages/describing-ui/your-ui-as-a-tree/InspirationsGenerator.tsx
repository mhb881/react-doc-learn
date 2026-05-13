import { useState } from "react";
import inspirations from "./inspirations";
import FancyText from "./FancyText";
import Color from "./Color";

function InspirationsGenerator({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const inspiration = inspirations[index];

  function next() {
    setIndex((index) => (index + 1) % inspirations.length);
  }

  return (
    <>
      <p>Your inspiration {inspiration.type} is:</p>
      {inspiration.type === "quote" ? (
        <FancyText text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}
      <button className="primary-btn" onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}

export default InspirationsGenerator;

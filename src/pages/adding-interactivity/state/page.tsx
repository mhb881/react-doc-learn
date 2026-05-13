import { useState } from "react";
import { sculptureList } from "./data";
import CustomizeState from "./CustomizeState";

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const sculpture = sculptureList[index];

  function handleClick() {
    setIndex(() => (index + 1) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore((x) => !x);
  }

  return (
    <div className="space-y-2">
      <button className="primary-btn" onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button className="primary-btn" onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}

function StatePage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">State: 组件的记忆</h1>
      <hr className="my-8 text-gray-300 " />
      <Gallery />
      <hr className="my-8 text-gray-300 " />
      <CustomizeState />
    </div>
  );
}

export default StatePage;

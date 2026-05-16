import { useRef } from "react";

function CatFriends() {
  const firstCatRef = useRef<HTMLImageElement>(null);
  const secondCatRef = useRef<HTMLImageElement>(null);
  const thirdCatRef = useRef<HTMLImageElement>(null);

  function handleScrollToFirstCat() {
    firstCatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div className="">
      <nav className="flex flex-row gap-4 items-center justify-center mb-4">
        <button className={`primary-btn`} onClick={handleScrollToFirstCat}>
          Neo
        </button>
        <button className={`primary-btn`} onClick={handleScrollToSecondCat}>
          Millie
        </button>
        <button className={`primary-btn`} onClick={handleScrollToThirdCat}>
          Bella
        </button>
      </nav>

      <div className="overflow-x-hidden w-150 mx-auto relative border-2 p-8 rounded-2xl ">
        <ul className="flex flex-row flex-nowrap gap-4 items-center p-2 w-max">
          <li>
            <img
              src="https://placecats.com/neo/300/200"
              alt="Neo"
              ref={firstCatRef}
              className="block h-48 w-auto object-cover rounded-lg shadow-md"
            />
          </li>
          <li>
            <img
              src="https://placecats.com/millie/200/200"
              alt="Millie"
              ref={secondCatRef}
              className="block h-48 w-auto object-cover rounded-lg shadow-md"
            />
          </li>
          <li>
            <img
              src="https://placecats.com/bella/199/200"
              alt="Bella"
              ref={thirdCatRef}
              className="block h-48 w-auto object-cover rounded-lg shadow-md"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CatFriends;

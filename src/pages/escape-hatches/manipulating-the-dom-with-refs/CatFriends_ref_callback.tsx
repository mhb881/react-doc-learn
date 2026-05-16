import { useRef, useState } from "react";

interface Cat {
  id: number;
  imageUrl: string;
}

function setupCatList() {
  const catCount = 10;
  const catList = new Array(catCount);
  for (let i = 0; i < catCount; i++) {
    let imageUrl = "";
    if (i < 5) {
      imageUrl = "https://placecats.com/neo/320/240";
    } else if (i < 8) {
      imageUrl = "https://placecats.com/millie/320/240";
    } else {
      imageUrl = "https://placecats.com/bella/320/240";
    }
    catList[i] = {
      id: i,
      imageUrl,
    };
  }
  return catList;
}

function CatFriends_ref_callback() {
  const itemsRef = useRef<Map<Cat, HTMLElement | null>>(null);
  const [catList, setCatList] = useState(setupCatList);

  function getMap() {
    if (!itemsRef.current) itemsRef.current = new Map();
    return itemsRef.current;
  }

  function scrollToCat(cat: Cat) {
    const map = getMap();
    const node = map.get(cat);
    if (!node) return;
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <div className="">
      <nav className="flex flex-row gap-4 items-center justify-center mb-4">
        <button
          className={`primary-btn`}
          onClick={() => scrollToCat(catList[0])}
        >
          Neo
        </button>
        <button
          className={`primary-btn`}
          onClick={() => scrollToCat(catList[5])}
        >
          Millie
        </button>
        <button
          className={`primary-btn`}
          onClick={() => scrollToCat(catList[8])}
        >
          Bella
        </button>
      </nav>

      <div className="overflow-x-hidden w-[800px] mx-auto relative border-2 p-8 rounded-2xl ">
        <ul className="flex flex-row flex-nowrap gap-4 items-center p-2 w-max">
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                map.set(cat, node);

                return () => {
                  map.delete(cat);
                };
              }}
            >
              <img
                src={cat.imageUrl}
                className="block h-48 w-auto object-cover rounded-lg shadow-md"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CatFriends_ref_callback;

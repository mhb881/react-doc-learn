function getImageUrl(imageId: string, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

interface ProfileProps {
  person: {
    name: string;
    imageId: string;
    imageSize?: string | undefined;
    profession: string;
    awards: string[];
    discovered: string;
  };
}

const persons: ProfileProps["person"][] = [
  {
    name: "Maria Skłodowska-Curie",
    imageId: "szV5sdG",
    profession: "physicist and chemist",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovered: "polonium (chemical element)",
  },
  {
    name: "Katsuko Saruhashi",
    imageId: "YfeOqp2",
    profession: "geochemist",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovered: "a method for measuring carbon dioxide in seawater",
  },
];

function Profile({ person }: ProfileProps) {
  return (
    <section className="rounded-lg border-2 p-4 space-y-2">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imageId, person.imageSize)}
        alt={person.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}

export function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="rounded-lg p-4 space-y-4 shadow-md">
        {persons.map((person) => (
          <Profile key={person.name} person={person} />
        ))}
      </section>
    </div>
  );
}

function Challenge1_pptc() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 3 个挑战: 提取一个组件</h1>
      <hr className="my-8 text-gray-300 " />
      <Gallery />
    </div>
  );
}

export default Challenge1_pptc;

import Copyright from "./Copyright";
import FancyText from "./FancyText";
import InspirationsGenerator from "./InspirationsGenerator";

export function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationsGenerator>
        <Copyright year={2004} />
      </InspirationsGenerator>
    </>
  );
}

function ConsiderYourUIAsTreePage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">将 UI 视为树</h1>
      <hr className="my-8 text-gray-300 " />
      <App />
    </div>
  );
}

export default ConsiderYourUIAsTreePage;

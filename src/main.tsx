import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

/*
<div className="p-6">
      <h1 className="mb-10"></h1>
      <hr className="my-8 text-gray-300 " />
</div>
*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

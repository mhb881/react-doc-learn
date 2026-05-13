import { useState } from "react";

type Status = "empty" | "submmitting" | "success" | "error";

export function From_original() {
  const [status, setStatus] = useState<Status>("empty");

  if (status === "success") {
    return (
      <div>
        <div>
          <select
            className="border"
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
          >
            <option value="empty">Empty</option>
            <option value="submmitting">Submitting...Please wait</option>
            <option value="success">Success</option>
            <option value="error">Error</option>
          </select>
        </div>
        <h2>That's right!</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <h2>City Quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <p>Choose status:</p>
      <div>
        <select
          className="border"
          value={status}
          onChange={(e) => setStatus(e.target.value as Status)}
        >
          <option value="empty">Empty</option>
          <option value="submmitting">Submitting...Please wait</option>
          <option value="success">Success</option>
          <option value="error">Error</option>
        </select>
      </div>
      <form action="">
        <textarea className=" resize" disabled={status === "submmitting"} />
        <br />
        <button
          className="primary-btn"
          disabled={status === "empty" || status === "submmitting"}
        >
          Submit
        </button>
        {status === "error" && (
          <p className="Error">Good guess but a wrong answer. Try again!</p>
        )}
      </form>
    </div>
  );
}

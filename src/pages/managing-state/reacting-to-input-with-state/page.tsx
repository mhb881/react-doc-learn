import { From_original } from "./Form_original";
import { useState } from "react";

type Status = "typing" | "submitting" | "success";

function submitForm(answer: string) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      let isCorrect = answer === "lima";
      if (!isCorrect) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export function Form() {
  const [answer, setAnswer] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [status, setStatus] = useState<Status>("typing");

  if (status === "success") {
    return (
      <div>
        <h2>That's right!</h2>
      </div>
    );
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError((error as Error).message);
    }
  }

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value);
  }

  return (
    <div>
      <h2>City Quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <p>Choose status:</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          className=" resize"
          disabled={status === "submitting"}
        />
        <br />
        <button
          className="primary-btn"
          disabled={answer.length === 0 || status === "submitting"}
        >
          Submit
        </button>
        {error && (
          <p className="Error">Good guess but a wrong answer. Try again!</p>
        )}
      </form>
    </div>
  );
}

function ReactingToInputWithStatePage() {
  return (
    <div className="p-6">
      <h1 className="mb-10">用 State 响应输入</h1>
      <hr className="my-8 text-gray-300 " />
      <From_original />
      <hr className="my-8 text-gray-300 " />
      <Form />
    </div>
  );
}

export default ReactingToInputWithStatePage;

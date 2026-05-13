import { useState } from "react";

type Status = "typing" | "sending" | "sent";

function sendMessage() {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function Form_hotel() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<Status>("typing");

  const isSending = status === "sending";
  const isSent = status === "sent";

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage();
    setStatus("sent");
  }

  if (isSent) {
    return (
      <div>
        <p>Thank you for your feedback!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>避免矛盾的 state</h2>
      <form
        action=""
        className="flex flex-col gap-4 items-start"
        onSubmit={handleSubmit}
      >
        <p>How was your stay at The Prancing Pony?</p>
        <textarea
          name=""
          id=""
          disabled={isSending}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <button className="primary-btn" type="submit">
          Send
        </button>
        {isSending && <p>Sending...</p>}
      </form>
    </div>
  );
}

export default Form_hotel;

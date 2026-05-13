import { useState } from "react";

function Panel({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="border p-4 rounded-2xl mb-4">
      <button className="primary-btn" onClick={() => setOpen(!open)}>
        {open ? "Collapse" : "expand"}
      </button>
      {open && children}
    </section>
  );
}

export default Panel;

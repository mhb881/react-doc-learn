import "./styles.css";

function Copyright({ year }: { year: number }) {
  return <p className="small">©️ {year}</p>;
}

export default Copyright;

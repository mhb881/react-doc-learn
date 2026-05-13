import "./styles.css";
function Color({ value }: { value: string }) {
  return <div className="colorbox" style={{ backgroundColor: value }} />;
}

export default Color;

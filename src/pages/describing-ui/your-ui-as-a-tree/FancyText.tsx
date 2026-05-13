function FancyText({ title, text }: { title?: boolean; text: string }) {
  return title ? (
    <h1 className="fancy title">{text}</h1>
  ) : (
    <h2 className="fancy cursive">{text}</h2>
  );
}

export default FancyText;

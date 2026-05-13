export default function Clock(props: {
  color: string;
  time: string;
  setColor: (color: string) => void;
}) {
  const { color, time } = props;

  return <h1 style={{ color: color }}>{time}</h1>;
}

import "./styles.css";

export default function Title({
  color,
  text,
}: {
  text: string;
  color: string;
}) {
  return (
    <h1 style={{ color }} className="title">
      {text}
    </h1>
  );
}

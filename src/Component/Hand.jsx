import "./Hand.css";

export default function Hand({ cards }) {
  return (
    <div className="Hand">
      {cards.map((card, index) => (
        <span key={index}>{card}</span>
      ))}
    </div>
  );
}

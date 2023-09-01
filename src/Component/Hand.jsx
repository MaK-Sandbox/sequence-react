function Hand({ cards }) {
  return (
    <div className="hand">
      {cards.map((card, index) => (
        <span key={index}>{card}</span>
      ))}
    </div>
  );
}

export default Hand;

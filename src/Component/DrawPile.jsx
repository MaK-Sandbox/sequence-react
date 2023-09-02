export default function DrawPile({ drawCard }) {
  return (
    <div
      onClick={() => {
        const card = drawCard();
        console.log(card);
      }}
    >
      DRAW
    </div>
  );
}

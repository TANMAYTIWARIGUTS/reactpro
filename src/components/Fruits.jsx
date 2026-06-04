export default function Fruits() {
  const arr = [
    { name: "apple", price: 100, emoji: "🍎" },
    { name: "mango", price: 80, emoji: "🥭" },
    { name: "banana", price: 60, emoji: "🍌" },
    { name: "orange", price: 90, emoji: "🍊" },
  ];
  return (
    <div>
      <ul>
        {arr.map((e) => (
          <li key={e}>
            {e.emoji} {e.name} Rs.{e.price}/-
          </li>
        ))}
      </ul>
    </div>
  );
}

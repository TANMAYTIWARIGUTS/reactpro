export default function Fruits() {
  const arr = ["apple", "mango", "banana", "orange"];
  return (
    <div>
      <ul>
        {arr.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

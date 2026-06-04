import Hello from "./components/Hello";

function App() {
  const obj = {
    name: "Sam",
    msg: "Sup?",
    emoji: "😊",
  };
  return (
    <div className="App">
      <Hello person={obj} />
    </div>
  );
}

export default App;

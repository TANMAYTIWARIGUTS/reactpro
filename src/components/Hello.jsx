const name = "Johny";

function displayMsg() {
  return "WOW";
}

function Hello() {
  return (
    <div>
      <h1>Hello {displayMsg()} from compo</h1> <h1>Okay</h1>
    </div>
  );
}

export default Hello;

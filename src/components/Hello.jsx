const name = "Johny";

function displayMsg() {
  return "WOW";
}

function Hello(props) {
  return (
    <>
      <h1>Hello {props.name}, {props.msg}</h1> <h1>Okay</h1>
    </>
  );
}

export default Hello;

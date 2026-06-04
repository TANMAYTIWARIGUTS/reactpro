const name = "Johny";

function displayMsg() {
  return "WOW";
}

function Hello(props) {
  return (
    <>
      <h1>Hello {props.name} from compo</h1> <h1>Okay</h1>
    </>
  );
}

export default Hello;

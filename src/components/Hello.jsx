
function Hello(props) {
  return (
    <>
      <h1>Hello {props.person.name}, {props.person.msg} {props.person.emoji} </h1>
    </>
  );
}

export default Hello;
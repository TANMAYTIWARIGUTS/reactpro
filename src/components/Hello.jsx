
function Hello(props) {
    const {name, msg}=props;
  return (
    <>
      <h1>Hello {name}, {msg}</h1>
    </>
  );
}

export default Hello;

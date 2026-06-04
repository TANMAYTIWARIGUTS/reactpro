import Hello from './components/Hello';

function App() {
  const arr=[1,2,3];
  return (
    <div className="App">
      <Hello name="Sam" msg="Sup?" emoji="😊" arr={arr}/>
     
      
    </div>
  )
}

export default App;

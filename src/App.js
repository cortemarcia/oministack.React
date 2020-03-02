import React, {useState} from 'react';


function App() {
  const [counter, setCounter] = useState(0);

  function IncrementCounter() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Creator:{counter}</h1>
      <button onClick={IncrementCounter}> Clique Aqui </button>
    </>

  );
}

export default App;

import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  return (
    <div>
      <input id="inputValue" type="text" placeholder='Find sum from 1 to n' onChange={function (e) {
        setInputValue(e.target.value);
      }}></input>
      <br></br>
      {inputValue}
      <Sum inputValue={inputValue} ></Sum>
      <br></br>
      <button onClick={function () { setCounter(counter + 1) }}>Counter {counter}</button>
    </div>
  )
}

function Sum(props) {
  // let count = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= props.inputValue; i++) {
      count = count + i;
    }
  // }, [props.inputValue])
  
  return <div>
    Sum from 1 to {props.inputValue} is {count}
  </div>
}

export default App

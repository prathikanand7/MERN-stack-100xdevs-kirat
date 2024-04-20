import { useState } from 'react'
import './App.css'
import { CountContext } from './context';
import { useContext } from 'react';

//reducer and useReducer hooks were there in react to handle state variables
//now a days we have Redux and recoil libraries are there which helps in handling the state variables.
function App() {
  const [count, setCount] = useState(0);
  
  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

//had to deliberately needed to add setCount in this Count() as the <Buttons/> tag is kept in it. Although, the buttons function has the 
//prop SetCount...still it needs to be passed via the middleman Count() to attain the objective. this concept is known as prop drilling
//ContextAPI helps us avoid this un-necessary use of props by teleporting the variable to the required child without having to drill the prop


function Count({ setCount }) {
  return <div>
    <CountRenderer />
    <Buttons  setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1);
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1);
    }}>Decrease</button>
  </div>
}

export default App

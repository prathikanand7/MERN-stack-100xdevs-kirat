import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Count count={count} setCount={setCount}/>
      
    </div>
  )
}

//had to deliberately needed to add setCount in this Count() as the <Buttons/> tag is kept in it. Although, the buttons function has the 
//prop SetCount...still it needs to be passed via the middleman Count() to attain the objective. this concept is known as prop drilling
//ContextAPI helps us avoid this un-necessary use of props by teleporting the variable to the required child without having to drill the prop


function Count({count, setCount}) {
  return <div>
    {count}
  <Buttons count={ count} setCount={setCount} />
  </div>
}

function Buttons({ count, setCount }) {
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

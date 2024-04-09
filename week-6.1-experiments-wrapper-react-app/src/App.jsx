import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <CardWrapper innerComponent={<TextComponent />}></CardWrapper>
    <CardWrapper innerComponent={<TextComponent2 />}></CardWrapper>
  </div>
}

function CardWrapper({innerComponent }) {
  // create a div which has a border and inside the div, render the prop
  return <div style={{border:"2px solid red"}}>
    {innerComponent}
  </div>
}

//inputs for the inner component
function TextComponent() {
  return <div>
    hi there!
  </div>
}
function TextComponent2() {
  return <div>
    hi there 2!
  </div>
}

export default App

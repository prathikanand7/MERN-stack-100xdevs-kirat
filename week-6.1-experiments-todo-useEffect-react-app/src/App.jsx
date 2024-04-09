import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  //using only useEffect will mount / render the todos only once while initializing the app, But to continuosly update the app 
  //we need to wrap the useEffect inside a setInterval()
  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async function (res) {
          const json = await res.json();
          setTodos(json.todos);
        })
    }, 5000)
  }, [])
  
  return (
    <div>
      {todos.map(({ title, description }) =>
        <Todo title={title} description={description} />)}
    </div>
  )
}

function Todo({ title, description }) {
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

export default App

import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [selectedId, setSelectedId] = useState(1);
  return (
    <div>
      <button onClick={function () { setSelectedId(1) }}>1</button>
      <button onClick={function () { setSelectedId(2) }}>2</button>
      <button onClick={function () { setSelectedId(3) }}>3</button>
      <button onClick={function () { setSelectedId(4) }}>4</button>
      <button onClick={function () { setSelectedId(5) }}>5</button>
      <Todo id={selectedId}/>
    </div>
  )
}

function Todo({ id }) {
  const [todo, setTodo] = useState([]);

  //to not let the browser get set in a infinite loop of updation, 
  //we need useEffect() to mount it only once when we open the app on the 1st occurance
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(function (response) {
        setTodo(response.data.todo);
      })
  }, [id]);

  return <div>
    <h1>{todo.title}</h1>
    <h3>{todo.description}</h3>
  </div>
}

export default App

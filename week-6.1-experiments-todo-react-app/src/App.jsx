import { useState } from 'react'
import './App.css'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "goin to gym today"
  }, {
    id: 2,
    title: "eat food",
    description: "eat food tommorow"
  }, {
    id: 3,
    title: "go to class",
    description: "goin to class day after tommrow"
    }])
  
  function addTodo() {
    const newTodos = [];

    //newTodos = todos
    for (let i = 0; i < todos.length; i++){
      newTodos.push(todos[i]);
    }
    newTodos.push({
      id: counter++,
      title: Math.random(),
      description: Math.random()
    })

    //existing ones + 1
    setTodos(newTodos);
  }
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo({ title, description }) {
  return <div>
    <h2>
      {title}
    </h2>
    <h3>
      {description}
    </h3>
  </div>
}

export default App

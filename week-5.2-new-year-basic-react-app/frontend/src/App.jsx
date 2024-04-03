import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

//useEffect hook needed, we'll learn later
function App() {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todos")
    .then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title: "asd",
          description: "asdasd",
          completed: false
        }
      ]}></Todos>
    </div>
  )
}

export default App

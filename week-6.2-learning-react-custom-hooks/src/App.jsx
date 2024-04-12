/* eslint-disable react/display-name */
import { useEffect } from "react";
import { memo, useCallback, useState } from "react";

//useTodos is like a custom hook -> which initialises an empty array and a state variable 
// and can be used to make the App look cleaner.
function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("")
      .then((res) => {
        setTodos(res.data.todos);
      })
  }, [])
  return todos;
}

function App() {
  const todos = useTodos();

  return <div>
    {todos}
  </div>
}

export default App;
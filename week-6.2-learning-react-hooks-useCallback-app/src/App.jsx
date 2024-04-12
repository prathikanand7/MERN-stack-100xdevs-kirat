/* eslint-disable react/display-name */
import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  //using useCallback here prevents the react from re-rendering the child component
  //since the inputFunction() is memoized in the memory, the component using it, in this case
  // <Child> will not re-render again and again 
  const inputFunction = useCallback(() => {
    console.log("hi there from callback");
  },[]);

  return <div>
    <Child inputFunction={inputFunction} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({ inputFunction }) => {
  console.log("child render")

  return <div>
    <button>Button clicked</button>
  </div>
})

export default App;
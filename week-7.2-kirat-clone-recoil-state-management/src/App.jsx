import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
{/*we need to wrap the component inside the RecoilRoot to use state
      in the App. */}
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

//needs count
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
//dont get both of them...if you need only 1 -> has performance benefit
  return <div>
    {isEven ? "It is even" : null}
  </div>
}

//requires setCount()
function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App


//useRecoilState() === useState -> gives both count and setCount
//useRecoilValue gives the value
//useSetRecoilState update the value
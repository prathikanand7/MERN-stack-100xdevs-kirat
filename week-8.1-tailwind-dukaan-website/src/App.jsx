import { RevenueCard } from "./components/RevenueCard"


function App() {
  
  return (
    <div className="grid grid-cols-4">
     <RevenueCard title ={"Amount Sending"} amount={"20,200.45"} orderCount={12}></RevenueCard>

    </div>
  )
}

export default App

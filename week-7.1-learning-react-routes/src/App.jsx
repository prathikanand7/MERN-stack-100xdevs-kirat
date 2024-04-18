import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

//client site routing
function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <div style={{ background: "red" }}>
    hi there - this is a top bar
    <button onClick={() => {
      navigate("/");
    }}>Landing</button>
    <button onClick={() => {
      navigate("/dashboard");
    }}>Dashboard</button>
  </div>
}
export default App

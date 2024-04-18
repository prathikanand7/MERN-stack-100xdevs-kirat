import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
//import { Dashboard } from './components/Dashboard';
//import { Landing } from './components/Landing';
import React, { Suspense } from 'react';
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

//client site routing
function App() {
 
  //suspense API to show "Loading..." to wait for the callback to return and render it on the screen
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
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

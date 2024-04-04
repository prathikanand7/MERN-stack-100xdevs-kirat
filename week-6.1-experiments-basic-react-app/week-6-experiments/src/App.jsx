import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Fragment } from 'react'

//remove the div from return to remove the extra div that gets added to the html. React.Fragment also does the same
function App() {
  const [title, setTitle] = useState("my name is Prathik");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  
  return (
    <Fragment>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="prathik2"></Header>
      <Header title="prathik3"></Header>
      <Header title="prathik4"></Header>
      <Header title="prathik5"></Header>
    </Fragment>

  )
}

//Method a) of moving the state to the component level to avoid re-rendering of the whole App.

/* function HeaderWithButon() {
  const [title, setTitle] = useState("my name is Prathik");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
  </div>
} 

function Header({ title }) {
  return <div>
    {title}
  </div>
}
*/

//Method b) of useing React.memo -> it lets you skip the re-rendering of components, when its props are unchanged.

const Header = React.memo(function Header({ title }){
  return <div>
    {title}
  </div>
})

export default App

import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  
  const addvalue = () =>{
    if(counter < 20){
    setCounter(counter+1);
    }
  }
  const remVAlue = ()  =>{
    if(counter >= 1){
    setCounter(counter-1);
    }
  }

  return (
    <>
     <h1>Prozpekt-Anchal</h1>
     <h2>Counter Value = {counter}</h2>
     <button onClick={addvalue}>Add Value</button>
     <br/>
     <button onClick={remVAlue}>Remove Value</button>
    </>
  )
}

export default App

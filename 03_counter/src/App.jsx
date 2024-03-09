import { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState(0);
  // useState is a hook in React that allows functional components to manage state. It takes an initial state value as an argument and returns an array containing the current state value and a function to update that value. When the state is updated using this function, React re-renders the component with the new state value. This allows components to have stateful behavior without needing to use class components.
  // useState() helps in updating UI, wherever the variable is used

  return (
    <>
      <h1>HELLO</h1>
      <h2>Counter Value: {value}</h2>
      <button onClick={()=>setValue(value===20?value:value+1)}>Increase Value</button>
      <button onClick={()=>setValue(value===0?value:value-1)}>Decrease Value</button>
    </>
  )
}

export default App

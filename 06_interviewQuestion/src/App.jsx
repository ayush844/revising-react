import { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState(0);

  const addValue = ()=>{
    setValue(value+1);

    setValue(value+1);

    setValue(value+1);

    setValue(value+1);

    setValue(value+1);
  }

  // even if we add multiple setValue() the value will still increase just by one


//In React's functional components, useState does not update the state immediately. Instead, it schedules an update and batches state updates for performance reasons. This means that if you call setValue multiple times within the same synchronous execution context, React will batch these updates together and only perform one re-render with the latest state.

//In your code snippet, even though you call setValue multiple times in the addValue function, React will batch these updates and only execute the last one. So, regardless of how many times you call setValue, the value will only increase by one *****because each call overrides the previous one before the component is re-rendered.*****

//If you want to update the state based on the current value, you should use the functional update pattern to ensure that you're always working with the latest state. Here's how you can modify your code to achieve the desired behavior:

  // we can correct it in this way:
  const increaseValue = ()=>{
    setValue(prevValue => prevValue+1);

    setValue(prevValue => prevValue+1);

    setValue(prevValue => prevValue+1);

    setValue(prevValue => prevValue+1);

    setValue(prevValue => prevValue+1);
  }
  //here the value will increae by 5 at one click



  const reduceValue = ()=>{
    setValue(value===0?value:value-1)
  }


  return (
    <>
      <h1>HELLO</h1>
      <h2>Counter Value: {value}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={reduceValue}>Decrease Value</button>
    </>
  )
}

export default App

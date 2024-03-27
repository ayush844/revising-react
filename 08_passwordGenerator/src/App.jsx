import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");



//useRef()
// useRef is a React Hook that lets you reference a value that’s not needed for rendering.

const passwordRef = useRef(null);

//------------------------------------------------------------------------------------------------------------------------
  // useCallback is a React Hook that lets you cache a function definition between re-renders.

// useCallback( func, [...dependencies])
// useCallback, is used for memoizing functions. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This can be useful for optimizing performance by preventing unnecessary re-renders caused by the recreation of functions, particularly in scenarios where you pass functions as props to child components.

// [Memoization is a technique used in computer science and programming to optimize the performance of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. ]

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"

    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  // useEffect()
  // useEffect is a React Hook that lets you synchronize a component with an external system.

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

//In summary, both hooks have different purposes:
//useCallback optimizes performance by memoizing functions and re-running them only when their dependencies change.
//useEffect is for managing side effects and runs its function according to the dependencies specified or after every render if //no dependencies are provided.
//So, while useCallback caches the function and runs it when dependencies change, useEffect is not specifically about caching //functions but rather about managing side effects and executing code in response to changes in dependencies.
//************************************************************************************************************************* */

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3) 
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
    <h1 className="text-4xl text-center font-bold underline text-pink-700">
      PASSWORD GENERATOR
    </h1>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-600 bg-gray-700">
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder='password' readOnly 
      ref={passwordRef}/>
      <button onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App

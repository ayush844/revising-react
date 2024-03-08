import Chai from "./chai"

function App() {
  const username = "chai aur code"
  return (
    <>
      <h1>AYUSH, this side {username}</h1> 
      {/* inside these curly braces {} we can only use evaluated expressions and not anything that should be calculated here also we can not use things like if else etc*/}
      <Chai /> 
    </>
  )
}

export default App

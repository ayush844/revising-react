import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardOne } from './components/Card'
import { CardThree } from './components/newCard'


function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    name: "AYUSH",
    surname: "SHARMA"
  }

  const myArr = [1, 2, 3, 4]

  return (
<>

    <div className='flex'>
    <CardOne image="https://images.pexels.com/photos/1386608/pexels-photo-1386608.jpeg?auto=compress&cs=tinysrgb&w=600" name="alexa" myobj={myObj} someArr={myArr} />

    <CardOne image="https://images.pexels.com/photos/1024380/pexels-photo-1024380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="angela"  />

    <CardOne  image="https://images.pexels.com/photos/1024380/pexels-photo-1024380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="angela"  />
    </div>


    <div className='flex'>
    <CardThree image="https://images.pexels.com/photos/1386608/pexels-photo-1386608.jpeg?auto=compress&cs=tinysrgb&w=600" name="alexa" myobj={myObj} someArr={myArr} />
    <CardThree image="https://images.pexels.com/photos/1024380/pexels-photo-1024380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="angela" myobj={myObj} someArr={myArr} />
    <CardThree image="https://images.pexels.com/photos/1024380/pexels-photo-1024380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="angela" myobj={myObj} someArr={myArr} />
    </div>

    

</>
  )
}

export default App

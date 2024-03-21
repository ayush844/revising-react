import { useState } from "react"

function App() {

  const [color, setColor] = useState("pink");


  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-4 py-3 rounded-lg">
          <button onClick={()=>setColor('red')} className="bg-red-600 text-black px-2 py-3 rounded-md text-xl font-bold">RED</button>
          <button onClick={()=>setColor('pink')} className="bg-pink-400 text-black px-2 py-3 rounded-md text-xl font-bold">PINK</button>
          <button onClick={()=>setColor('#FFFF66')} className="bg-yellow-400 text-black px-2 py-3 rounded-md text-xl font-bold">YELLOW</button>
          <button onClick={()=>setColor('#000080')} className="bg-blue-600 text-black px-2 py-3 rounded-md text-xl font-bold">BLUE</button>
          <button onClick={()=>setColor('#27CE93')} className="bg-green-400 text-black px-2 py-3 rounded-md text-xl font-bold">GREEN</button>
          <button onClick={()=>setColor('#CD6625')} className="bg-orange-500 text-black px-2 py-3 rounded-md text-xl font-bold">ORANGE</button>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Bg_changer from './components/Bg_changer'
function App() {
  const [color, setcolor] = useState('olive')

  return (


    <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>

<div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 mx-7">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl my-5 mx-6">

    <button onClick={()=> setcolor("red")}
    className="outline-none px-4 py-1 rounded-3xl " style={{backgroundColor: "Red"}}
    >Red</button>

<button onClick={()=> setcolor("Blue")}
    className="outline-none px-4 rounded-3xl " style={{backgroundColor: "Blue"}}
    >Blue</button>

<button onClick={()=> setcolor("aqua")}
    className="outline-none px-4 rounded-3xl " style={{backgroundColor: "aqua"}}
    >aqua</button>

<button onClick={()=> setcolor("yellow")}
    className="outline-none px-4 rounded-3xl " style={{backgroundColor: "yellow"}}
    >yellow</button>

<button onClick={()=> setcolor("orange")}
    className="outline-none px-4 rounded-3xl " style={{backgroundColor: "orange"}}
    >orange</button>

<button onClick={()=> setcolor("green")}
    className="outline-none px-4 rounded-3xl " style={{backgroundColor: "green"}}
    >green</button>

      </div>
      </div>
       
    </div>
   )
}

export default App






     {/* <h1 className=' bg-green-400 text-black p-4 rounded-xl'>hey my name is gupta</h1> */} 
     {/* <Bg_changer />
     {/* <Card username="hey bhai" />
     <Card btntext="click me" /> */}

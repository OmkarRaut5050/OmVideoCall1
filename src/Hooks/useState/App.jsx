import { useState } from 'react'

function App() {

    const[count , setCount] = useState(0);
    const[color , setColor] = useState('red')
    const[Msg,setMsg] = useState("Subscribed")

  return (
    <div className="App">
        <h1>Counter</h1>
        <h2 style={{color:`${color}`}}>{count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setColor('green')}>green</button>
        <button onClick={()=>setMsg('Subscribed 🔔')}>{Msg}</button>

    </div>
  )
}

export default App
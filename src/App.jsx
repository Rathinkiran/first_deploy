import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function changer(){
    setCount(count+1)
  }

  return (
    <div style={{paddingTop:450, color:'green'}}>
      <center>    
        <button onClick={changer}>counter is {count}</button><br></br><br></br>
        <div>
        <a href='https://www.google.com/' target='_blank'>Go To Google</a>
        </div>
        
      </center>
    </div>

  )
}

export default App

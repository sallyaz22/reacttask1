import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar';
import Counter from './component/counter/Counter';

function App() {
let  [count,setCount] = useState(0); 

const changeCount = ()=>{
  setCount(count+1);
  console.log(count)
}


  return (
    <div>
      <Navbar/> 
      <Counter/>   
      <h3>Number</h3>  
     <button onClick={changeCount} className='buttonOne'>Asil Zoghaer {count}</button>
    </div>


  )
}

export default App

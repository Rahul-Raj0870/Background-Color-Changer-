

import { useState } from 'react'
import './App.css'
import backgroundImage from './assets/bg-img.avif'
function App() {
 
const [bgColor,setColor] = useState('yellow')

const bgColorChanger = (color)=>{
  setColor(color)
}
  return (
    <>
      <div style={{minHeight:'100vh',backgroundColor:bgColor}} className=' position-relative'>
        
        <div className=' p-2 position-absolute rounded  ' style={{backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover',
          backgroundPosition: 'center', width:'300px',height:'300px', top:'40%', left:'50%', transform:'translateX(-50%)' }}>
        <div />
          <h2 className='text-center mb-4 text-light fw-bolder' style={{fontSize:'1.8rem'}}>Background <span style={{color:'yellow',color:bgColor}} >Changing App</span></h2>
          <img className='border ' src="" alt="" />
         <div className='d-flex justify-content-between' style={{ position: 'relative', zIndex: 1,top:'38%' }}>
          
            <button className='btn btn-danger text-white' onClick={()=>bgColorChanger('#FF0000')}>red</button>
            <button className='btn btn-success text-white'onClick={()=>bgColorChanger('green')}>green</button>
            <button className='btn btn-info text-white'onClick={()=>bgColorChanger('blue')}>blue</button>
            <button className='btn btn-dark text-white'onClick={()=>bgColorChanger('black')}>black</button>

         </div>
        </div>

      </div>
    </>
  )
}

export default App

import React from 'react'
import '../Components/BoxFile.css'

const Handler=()=>{
   const body = document.querySelector('body')
   body.style.backgroundColor=getRandomColor()
}

function getRandomColor(){
  let letters = '0123456789ABCDEF'
  let color ='#'
  for(let i=0;i<6;i++)
  {
    color+= letters[Math.floor(Math.random() * 16)]
  }
  return color;
}

function BoxFile() {
  return (
    <div   className='container'>
    <div className='click1'>
    <button className='btn1'>BACKGROUND COLOR CHANGES</button>
    </div>
    <div className='click'>
      <button className='btn' onClick={Handler}>Click Me </button>
    </div>
    </div>

  )
}
export default BoxFile
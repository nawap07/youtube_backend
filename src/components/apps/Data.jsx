import React, { useState } from 'react'

const Data = () => {
  const[count,setCount]=useState(0);

  const increment=()=>{
    setCount(c=>c+1);
  }
  return (
    <div> 
      <button style={{fontSize:'20px',padding:'5px'}} onClick={()=>increment()} >+1</button>
      <br /><br />
      <button  style={{fontSize:'20px',padding:'5px'}} onClick={()=>{increment();increment();increment()}}  >+3</button>
<br /><br />
<h3> Score:-{count}</h3>


    </div>
  )
}

export default Data;
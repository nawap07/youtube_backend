 import React, { useState } from 'react'
 import {sculptureList} from "../../datas"
 
 const Show = () => {
  const [index,setIndex]=useState(0);
  const [show,setShow]=useState(false);

  const HandleNxtBtn=()=>{
    setIndex(index+1);
  }

  const editBtn =()=>{
    setShow(!show);
  }

  const scalat=sculptureList[index];
   return (
     <div> 
      <button onClick={HandleNxtBtn}>Next</button>
      <p>({index} of {sculptureList.length}) </p>
      <h2>{scalat.name} is a goood in all over World {scalat.artist}</h2>
      <button onClick={editBtn}>
        {show ? "Hide": "Show"}
      </button>
      {
        show && <p>{scalat.description}</p>
      }
      <img src={scalat.url} alt={scalat.alt} />
     </div>
   )
 }
 
 export default Show
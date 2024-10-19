import React, { useRef, useState } from 'react'

const Watch = () => {
    const[time,setTime]=useState(0);
    const timeRef=useRef(null);

    const HandleStart=()=>{
        timeRef.current=setInterval(()=>{
            setTime((time)=>time+1);
        },1000)
    }

    const HandleStop=()=>{
        clearInterval(timeRef.current);
        timeRef.current=null;
    }

    const HandleReset=()=>{
        HandleStop();
        setTime(0);
    }
  return (
    <div> 
        <h2>Timer  :- {time} </h2>
        <button onClick={HandleStart}>Start</button>
        <button onClick={HandleStop}>Stop</button>
        <button onClick={HandleReset}>Reset</button>
    </div>
  )
}

export default Watch
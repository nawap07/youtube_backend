 import React, { useRef, useState } from 'react'
 
 const StopWatch = () => {
const[watch,setWatch]=useState(0);
const ref=useRef(null);
function startWatch(){
ref.current=setInterval(()=>{
    setWatch(watch=>watch+1);
},1000)
}
function stopWatch(){
    clearInterval(ref.current);
    ref.current=null

}
function resetWatch(){
    stopWatch();
    setWatch(0);

}
   return (
     <div>
        <h2 ref={ref}>{watch}</h2>
        <button onClick={startWatch}>Start</button>
        <button onClick={stopWatch}>Stop</button>
        <button onClick={resetWatch}>Reset</button>
     </div>
   )
 }
 
 export default StopWatch
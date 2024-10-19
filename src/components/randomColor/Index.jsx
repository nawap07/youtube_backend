import React, { useEffect, useState } from 'react'
import "./style.css"
const RandomColor = () => {
    const[typeOfcolor,setTypeOfColor]=useState("hex");
    const[color,setColor]=useState("#000000");
    function randomLength(length){
      return  Math.floor(Math.random()*length);
    }
    function ranomRGBColorGenerator(){

        const r=randomLength(256);
        const g=randomLength(256);
        const b=randomLength(256);
        setColor(`rgb(${r},${g},${b})`)

    }
    function randomHexColorGenerator(){
        let hex=[1,2,3,4,5,6,7,8,9,0 ,'A','B','C','D','E','F'];
        let hexColor='#';
        for(let i=0;i<6;i++){
            hexColor += hex[randomLength(hex.length)];
        }
        setColor(hexColor)
    }
    useEffect(()=>{
        if(typeOfcolor=== 'rgb') ranomRGBColorGenerator()
            else randomHexColorGenerator()
    },[typeOfcolor])
    
  return (
    <div style={{height:'100vh' ,width:'100vw' , background:color}}> 
       <div className="">
       <button onClick={()=>setTypeOfColor("hex")}>HEX Color</button>
        <button onClick={()=>setTypeOfColor("rgb")}>RGB Color</button>
        <button onClick={typeOfcolor==='hex'? randomHexColorGenerator: ranomRGBColorGenerator}>Random Color Generater</button>
        
       </div>
       <div className="" style={{display:'flex',justifyContent:'center', color:'#fff' , fontSize:'60px', flexDirection:'column', gap:'20px', marginTop:'50px'}}>
        <h3>{typeOfcolor==='rgb' ?'RGB color':'HEX color'}</h3>
        <h1>{color}</h1>
       </div>
    </div>
  )
}

export default RandomColor
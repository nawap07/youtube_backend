 import React, { useCallback, useEffect, useState } from 'react'
 
 const PasswordGenerater = () => {
  const[lengths,setLengths]=useState(8);
  const[password,setPassword]=useState("");
  const[number,setNumber]=useState(false);
  const[chracter,setCharacter]=useState(false);

  const passWorGeneta=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrtuvwxyz"
    if(number) str += "0123456789"
    if(chracter) str += "!@#$%^&*()_+"

    for(let i=1;i<=lengths;i++){
      let chr=Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(chr)
    }
    setPassword(pass)
  },[lengths,chracter,number,setPassword])

  useEffect(()=>{
    passWorGeneta()
  },[lengths,chracter,number,passWorGeneta])
   return (
     <div> 
      <input type="text" placeholder='Passsword' value={password} readOnly />

      <input type="range" min={8} max={100} value={lengths} onChange={(e)=>setLengths(e.target.value)} />
      <input type="checkbox" value={number} onChange={()=>setNumber((prv)=> !prv)} />
      <input type="checkbox" value={chracter} onChange={()=>setCharacter((prv)=> !prv)} />

     </div>
   )
 }
 
 export default PasswordGenerater
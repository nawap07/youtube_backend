 import React, { useState } from 'react'
import data from './data'
 data
 const Index = () => {
    const [select,setSelect]=useState(null);
    const[enableSelect,setEnableSelect]=useState(false);
    const[multi,setMulti]=useState([]);
    function handleSingleSelect(id){
        setSelect(id===select ?null:id)
    }
    function multiSelections(id){
        let copyMultiple=[...multi];
        const findIndexCurrentId=copyMultiple.indexOf(id);
        if(findIndexCurrentId === -1){
            copyMultiple.push(id)
        }else{
            copyMultiple.splice(findIndexCurrentId,1)
        }

        setMulti(copyMultiple)
    }
   return (
     <div> 
        <div className="">
            <button style={{padding:'10px'}}
            onClick={()=>setEnableSelect(!enableSelect)}
            >Enable All</button>
            {
                data && data.length ?data.map((item)=>(
                    <div className="" key={item.id}>
                         <div className="" onClick={enableSelect?()=>multiSelections(item.id):()=>handleSingleSelect(item.id)} style={{cursor:'pointer'}}>
                         <h3>{item.question}</h3>
                         <span>+</span>
                         </div>
                         {
                            enableSelect? multi.indexOf(item.id)!==-1 && (
                                <div className="">{item.answer}</div>
                            ):  select===item.id ? <div className="">
                                {item.answer}
                            </div> :null
                         }
                         {/* {
                            select === item.id || multi.indexOf(item.id) !==-1 ?   <div className="">
                                {item.answer}
                            </div> :null
                         } */}
                    </div>
                ))  
                    
                  :"No Data is Found..."
            }
        </div>
     </div>
   )
 }
 
 export default Index
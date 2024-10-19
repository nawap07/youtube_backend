import React, { useEffect, useState } from 'react'
const localData=()=>{
    const lists=localStorage.getItem("DAtaA");
    if(lists){
        return JSON.parse(lists);
    }else{
        return [];
    }
}

const Lists = () => {
    const[input,setInput]=useState("");
    const[data,setData]=useState(localData());
    const[edit,setEdit]=useState("");
    const[toggle,setToggle]=useState(false);

    useEffect(()=>{
        localStorage.setItem("DAtaA",JSON.stringify(data))
    },[data])
    const getData=(e)=>{
        e.preventDefault();
        if(!input){
            alert("Please write somethings....");
        }
        else if(edit && toggle){
            setData(
                data.map((elm)=>{
                    if(elm.id===edit){
                        return {...elm,name:input}
                    }
                    return elm;
                })
            )
            setEdit(null);
            setInput("");
            setToggle(false)
        }
        else{
            const InputData={
                id:new Date().getTime().toString(),
                name:input,
            }
            setData((prv)=>[...prv,InputData]);
            setInput("");
        }
    }

    const EditData=(index)=>{
        const editItems=data.find((elm)=> {
            return  elm.id === index;
        })
        setInput(editItems.name);
        setEdit(index);
        setToggle(true)
    }

    const deleteData=(index)=>{
        const deleteItems=data.filter((elm)=>(
            elm.id !== index
        ))
        setData(deleteItems);
    }
  return (
    <div> 
        <form onSubmit={getData}>
            <input type="text"  placeholder='Add Data...' value={input} onChange={(e)=>setInput(e.target.value)}/>
             {
                toggle?<button>Edit</button>:<button>Add</button>
             }
        </form>
        {
            data.map((elm)=>(
                <div key={elm.id} className="">
                    <h2>{elm.name}</h2>
                    <button onClick={()=>deleteData(elm.id)}>Delete</button>
                    <button onClick={()=>EditData(elm.id)}>Edit</button>
                </div>
            ))
        }
    </div>
  )
}

export default Lists
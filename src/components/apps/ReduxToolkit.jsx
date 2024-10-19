 import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../../store/todoSlice';
 
 const ReduxToolkit = () => {
    const[value,setValue]=useState('');
    const dispatch=useDispatch()
    const todos=useSelector(state=>state.todos);

    function handleTodo(){
        dispatch(addTodo(value));
        setValue('');
    }

    function editText(id){
        const updateText=prompt("Write again your Todo")
        console.log("fggg");
        
        if(updateText){
            dispatch(updateTodo({id,text:updateText}))
        }
    }
   return (
     <div> 
        <input
        type='text'
        placeholder='Add Todos'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <button onClick={handleTodo}>Add</button>

        <div className="">
            {
                todos.map((todo)=>(
                    <div className="" key={todo.id}>
                        <h2>{todo.text}</h2>
                        <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
                        <button onClick={()=>editText(todo.id)}>Edit</button>
                    </div>
                ))
            }
        </div>
     </div>
   )
 }
 
 export default ReduxToolkit
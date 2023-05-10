import React, { useEffect } from 'react'
import Task from "./task"
import { useState } from 'react'
import './App.css' 
const Notes = () => {
  const localarray=localStorage.getItem("Tasks")?JSON.parse(localStorage.getItem("Tasks")):[];
  const [Tasks,setTasks]=useState([ ]);
  const[title,settitle]=useState([]);
  const [description,setdescription]=useState("");
  //           <!--submit form-->
  const Submit =(event)=>{
   event.preventDefault();
   settitle("");
   setdescription("");
   setTasks([...Tasks,{
   title,description}])
  };
  //            <!--Delete task-->
  const deletetask=(index) =>{
   const filterdarray=Tasks.filter((val,i) =>{
    return i !==index;
  });
  setTasks(filterdarray);
}
useEffect(()=>{
  localStorage.setItem("Tasks",JSON.stringify(Tasks));
})
  return (
    <div className='container'>
       <form onSubmit={Submit} >
          <input 
            placeholder='Title'
            value={title}
            onChange={(e)=>{
            settitle(e.target.value)} }
           />
          <textarea 
          placeholder='Enter your Note'
          value={description}
          onChange={(e)=>{
          setdescription(e.target.value)}}
          ></textarea>
          <button >Add Note</button>
       </form>
   { Tasks.map((item,index)=>( 
    <Task 
    key={index}
    title={item.title}
    Description={item.description}
    deletetask={deletetask}
    index={index}
     />
   ))}
    </div>
  )
}
export default Notes;

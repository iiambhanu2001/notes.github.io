import React from 'react';
import uuid  from 'react-uuid';
import Sidebar from './component/Sidebar.js'
import Main from './component/Main.js'
import "./App.css";
import { useState,useEffect } from 'react';
function App() {
  const [notes,setNotes]=useState( JSON.parse(localStorage.notes) || []);
  const [activenote,setActivenote]=useState(false);


  useEffect( ()=>{
        localStorage.setItem("notes",JSON.stringify(notes));
  },[notes]);

  const onAddNote = () => {
      const newNote= {
      id: uuid(),
      title:"",
      body: "",
      lastModified: Date.now()  
    };
     console.log(newNote);
     setNotes([newNote,...notes]);
     setActivenote(newNote.id);
  };

  const onDeletenote=(idtodelete)=>{
     setNotes(notes.filter(({id})=>id!==idtodelete));
  };
 
  const onupdateNote=(updatednote)=>{
    const updatearray=notes.map((note)=>{
      if(note.id===activenote){
        return updatednote;
      }


      return note;
    });
    setNotes(updatearray);
  }
  const getactivenote=()=>{
    return notes.find(({id}) => id===activenote);
 };
 
  return (
    <div  className="App">  
     <Sidebar 
     notes={notes}
      onAddNote={onAddNote }  
      onDeletenote={onDeletenote}
     activenote={activenote}
     setActivenote={setActivenote}
      />
     <Main activenote={getactivenote()} 
     onupdateNote={onupdateNote }/>
     </div>
       
  );
};

export default App;

const Sidebar=({notes,onAddNote,onDeletenote,
  activenote,setActivenote}) =>
{
  const sortednotes=notes.sort((a,b)=>b.lastModified-a.lastModified);//sorted function...
  return(
 
          <div className="app-sidebar">
              <div className="app-sidebar-header">
               <h1>Notes</h1>
               <button onClick={onAddNote }>Add</button>
          </div>

          <div className="app-sidebar-notes">
              {sortednotes.map((note)=> (
                <div className={`app-sidebar-note ${note.id===activenote && "active"}`}
                     onClick={()=>setActivenote(note.id)}>

                    <div className="sidebar-note-title"> 
                    <strong>{note.title}</strong>
                    <button onClick={(e)=>onDeletenote(note.id)}>Delete</button>
                </div>
                <p>{note.body && note.body.substr(0,100)+ "..."} </p>
                <small className="note-meta">
                Last Modified{new Date(note.lastModified).toLocaleDateString("en-GB",{
                    hour: "2-digit",
                    minute:"2-digit",
                })}
                </small>
                </div>
       
           ))}
        </div>     
        </div>
    



  );

}

export default Sidebar;
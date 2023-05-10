import React from "react";

const Main=({activenote,onupdateNote})=>{
  const onEditfield=(key,value) => {
    onupdateNote({
      ...activenote,
       [key]:value,
       lastModiefied:Date.now(),
     });
  };
  if(!activenote)return <div className="no-active-note">no note selected </div>
  return(
    <div className="app-main">
         <div className="app-main-note-edit"> 
            <input
             type="text" 
             id="title" 
             placeholder="Note Title"
             value={activenote.title}
             onChange={(e)=>onEditfield("title",e.target.value)}
              autoFocus/>
            <textarea 
             id="body" 
             placeholder="Write your note here..."
               value={activenote.body } 
              onChange={(e) => onEditfield("body",e.target.value)}

            />
         </div>


         <div className="app-main-note-preview">
            <h1 className="preview-title">{activenote.title}</h1>
            <div className="markdown-preview">{activenote.body}</div>
         </div>

    </div>
  );

}

export default Main;
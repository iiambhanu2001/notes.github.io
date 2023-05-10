import React from 'react'

<button>Delete</button>
function Task({Title,Description,deletetask,index}) {
  return (
    <div className='task '>
      
      <div>
        <p>{Title}</p>
        <span>{Description}</span>
     
      </div>
      <button type="submit" onClick={()=>deletetask(index)}>Delete</button>

    </div>
  )
}
export default Task;

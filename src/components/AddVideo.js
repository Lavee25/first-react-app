import React, { useState } from 'react'

import'./AddVideo.css'

function AddVideo({addNewVideos}){

  const[video,setVideo]=useState({
    time:"1 year ago" ,
    channel:"k abc tutorial" ,
    varified:"true"} )

    function handleSubmit(e){
      e.preventDefault();
      console.log(video);
      addNewVideos(video)
     
    }
   function handleChange(e){
     e.preventDefault();
      setVideo({...video,
      [e.target.name] : e.target.value
    })
  }




  return (
    <form>
        <input type="text"name="title"onChange={handleChange} placeholder='enter title here'/>
        <input type="text"name="views" onChange={handleChange} placeholder='enter views here'/>
          <button onClick={handleSubmit}>Add Videos</button>
              
           
    </form>
  )
}

export default AddVideo;
import React, { useState } from 'react'

import'./AddVideo.css'

function AddVideo({addVideos}){

  const[video,setVideo]=useState( {
     time:"1 year ago" ,
     channel:"k abc tutorial" ,
     varified:"true"},)
    function handleSubmit(e){
      e.preventDefault();
      addVideos(video)
      
      }
   function handleChange(e){
    //console.log(e.target.name,e.target.value)
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
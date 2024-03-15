import React, { useState } from 'react'

import'./AddVideo.css';
import { useEffect } from 'react';

const initialvideoState={
  time:"1 year ago" ,
  channel:"k abc tutorial" ,
  varified:"true",
  title:"",
  views:""
}


  function AddVideo({addNewVideos,updateVideo,editableVideo}){
  const[video,setVideo]=useState(initialvideoState)
  

    function handleSubmit(e){
      e.preventDefault();
      console.log(video);
      if(editableVideo){
       updateVideo(video)
      }else{
        addNewVideos(video)
      }
      setVideo(initialvideoState) //  here setVideo(initialvideoState) reset input field empty once one video is added
     
    }
   function handleChange(e){
     e.preventDefault();
      setVideo({...video,
      [e.target.name] : e.target.value
    })
  } 
   useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo)  
    }
   
   
    },[editableVideo])



  return (
    <form>
         <input type="text"name="title"onChange={handleChange} placeholder='enter title here'value={video.title}/> 
        <input type="text"name="views" onChange={handleChange} placeholder='enter views here'value={video.views}/> 
       
          <button onClick={handleSubmit}>{editableVideo?"edit":"add"} Video</button>
              
           
    </form>
  )
}

export default AddVideo;
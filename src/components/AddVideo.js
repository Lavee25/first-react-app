import {React, useState } from 'react';
import'./AddVideo.css';
import { useContext,useEffect } from 'react';
import videoDispatchContext from './Context/videodispatchContext';

const initialvideoState={
  time:"1 year ago" ,
  channel:"k abc tutorial" ,
  varified:"true",
  title:"",
  views:""
}


  function AddVideo({editableVideo}){
  const[video,setVideo]=useState(initialvideoState)
  const dispatch=useContext( videoDispatchContext)
  //console.log("dispatch::",typeof dispatch)
  

    function handleSubmit(e){
      e.preventDefault();
      console.log(video);
      if(editableVideo){
        dispatch({type:'UPDATE',payload:video})}
      else{
       dispatch({type:'ADD',payload:video})}
      
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
      }},[editableVideo])
  return (
     <form>
         <input type="text"name="title"onChange={handleChange} placeholder='enter title here'value={video.title}/> 
         <input type="text"name="views" onChange={handleChange} placeholder='enter views here'value={video.views}/> 
         <button onClick={handleSubmit}>{editableVideo?"edit":"add"} Video</button>
     </form>
    )
}

export default AddVideo;
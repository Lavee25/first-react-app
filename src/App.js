import { useReducer, useState } from 'react';
import './App.css';
import videodb from './data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';


function App(){
  const[editableVideo,seteditableVideo]=useState(null)
  function videoReducer(videos,action){
    switch(action.type){
      case'ADD':
      return[
        ...videos,{...action.payload,id:videos.length+1}    //action.payload===video 
      ]  
      case'DELETE':
      return videos.filter(video => video.id!== action.payload)
      case'UPDATE':
         const index=videos.findIndex(v=> v.id=== action.payload.id)
         const newVideos= [ ...videos]
         newVideos.splice(index,1,action.payload)
         seteditableVideo(null);
         return newVideos;
      default:
        return videos
    }
  }
  const[videos,dispatch]=useReducer(videoReducer,videodb)    //useReducer hook state reduce 
 
  
  function addVideos(video){
    dispatch({type:'ADD',payload:video})    
  }
        function deleteVideo(id){
          dispatch({type:'DELETE',payload:id}) 
         
          }
          function editVideo(id){
            console.log('id',id);
             seteditableVideo( videos.find(video => video.id=== id));
            }
         function updateVideo(video){  
          dispatch({type:'UPDATE',payload:video})
          }
      return (
      <>
        <div className='App' onClick={()=>{console.log('App')}}>
        <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
        <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
        </div>
      </> 
      );
    }
export default App;



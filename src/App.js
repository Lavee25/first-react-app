import {useReducer, useState } from 'react';
import './App.css';
import videodb from './data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './components/Context/themeContext';
import videosContext from './components/Context/videosContext';
import videoDispatchContext from './components/Context/videodispatchContext';

function App(){
  const[editableVideo,seteditableVideo]=useState(null)
  const[mode,setMode]=useState('darkMode');
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
       function editVideo(id){
        seteditableVideo( videos.find(video => video.id=== id));
       }
        return (
      <ThemeContext.Provider value={mode}>
        <videosContext.Provider value={videos}>
        <videoDispatchContext.Provider value={dispatch}>
        <div className={`App ${mode}`}>
        <button className="mode" onClick={()=>setMode(mode==='darkMode'?'lightMode':'darkMode')}>{mode==='darkMode'?'lightMode' :'darkMode'}</button> 
        <AddVideo editableVideo={editableVideo}></AddVideo>
        <VideoList editVideo={editVideo}></VideoList>
        </div>
        </videoDispatchContext.Provider>
        </videosContext.Provider>
      </ThemeContext.Provider>
      );
    }
export default App;



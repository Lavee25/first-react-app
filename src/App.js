import { useState } from 'react';
import './App.css';
import videodb from './data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/videoList';


function App(){
  const[videos,setVideos]=useState(videodb);  
  
  function addVideos(video){
        setVideos([
          ...videos,{...video,id:videos.length+1}
        ]);
      }
        function deleteVideo(id){
          console.log('id',id);
            setVideos(videos.filter(video => video.id!== id));
          }

      return (
      <>
        <div className='App' onClick={()=>{console.log('App')}}>
        <AddVideo addNewVideos={addVideos}></AddVideo>
        <VideoList deleteVideo={deleteVideo} videos={videos}></VideoList>
        </div>
      </> 
        );
    }
export default App;



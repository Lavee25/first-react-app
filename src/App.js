import { useState } from 'react';
import './App.css';
import videodb from './data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';


function App(){
  const[videos,setVideos]=useState(videodb);  
  const[editableVideo,seteditableVideo]=useState(null)
  
  function addVideos(video){
        setVideos([
          ...videos,{...video,id:videos.length+1}
        ]);
      }
        function deleteVideo(id){
          console.log('id',id);
            setVideos(videos.filter(video => video.id!== id));
          }
          function editVideo(id){
            console.log('id',id);
             seteditableVideo( videos.find(video => video.id=== id));
            }
         function updateVideo(video){
           
           const index=videos.findIndex(v=> v.id=== video.id)
         const newVideos= [ ...videos]
         newVideos.splice(index,1,video)
         setVideos(newVideos);
         console.log(video);
          }
      return (
      <>
        <div className='App' onClick={()=>{console.log('App')}}>
        <AddVideo addNewVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
        <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
        </div>
      </> 
        );
    }
export default App;



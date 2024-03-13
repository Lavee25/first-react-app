import { useState } from 'react';
import './App.css';
import Playbutton from './components/playbutton';
import Video from './components/video';
import videodb from './data/data';
import AddVideo from './components/AddVideo';

  
function App(){
    const[videos,setVideos]=useState(videodb);  
       function addVideos(video){
        setVideos([
          ...videos,{...video,id:videos.length+1}
        ]);

    }
      return (
        <div className='App'>
         <div><AddVideo addVideos={addVideos}/></div>
           
          {videos.map(video=>
            (<Video
                 id={video.id}
                 title={video.title}
                 views={video.views}
                 time={video.time}
                 channel={video.channel} 
                 varified={video.varified}>
                <Playbutton name="play" onPlay={()=>console.log('playin...',video.title)} onPause={()=>console.log('pauseed',video.title)}>{video.title}</Playbutton>
            </Video>)
            )
          }
        <div style={{clear:"both"}}></div>
        
      </div>
      );
    }
export default App;



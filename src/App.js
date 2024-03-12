import { useState } from 'react';
import './App.css';
import Playbutton from './components/playbutton';
import Video from './components/video';
import videodb from './data/data';
  
function App(){
      const[videos,setVideos]=useState(videodb);      
      const newVideoData = {
        id:videos.length+1,
        title:"new video",
        views:"100k",
        time:"2 year ago",
        channel:" abc tutorial",
        varified:"true"
      }
    return (
        <div className='App'>
            <div>
            <button onClick={()=>{
              setVideos([...videos,newVideoData]);
            }}>Add Videos</button>
          </div>
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


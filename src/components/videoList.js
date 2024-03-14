import React from 'react'
import Playbutton from './playbutton';
import Video from './video';

function VideoList({videos,deleteVideo}){
 return (
    <>
    {videos.map((video)=>
        <Video
             id={video.id}
             title={video.title}
             views={video.views}
             time={video.time}
             channel={video.channel} 
             varified={video.varified}
            deleteVideo={deleteVideo}
           >
            <Playbutton onPlay={()=>console.log('playing...',video.title)} onPause={()=>console.log('pauseed',video.title)}>{video.title}</Playbutton>
        </Video>)
        }
     <div style={{clear:"both"}}></div>
    </> 
  )
}


export default VideoList
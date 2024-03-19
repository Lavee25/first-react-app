import React from 'react'
import Playbutton from './playbutton';
import Video from './video';

function VideoList({videos,deleteVideo,editVideo}){
 function handlePlay(video){
  console.log('playing..',video.title)
 }
 function handlePause(video){
  console.log('playing..',video.title)
 }
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
             editVideo={editVideo}
           >
            <Playbutton  onPlay={handlePlay} onPause={handlePause}/>{video.title}
          
        </Video>)
        }
     <div style={{clear:"both"}}></div>
    </>
    
  )
 
}
 

export default VideoList
import {useContext,React} from 'react'
import Playbutton from './playbutton';
import Video from './video';
import videosContext from './Context/videosContext'

function VideoList({editVideo}){
const videos=useContext(videosContext)
console.log("videos:", videos) 
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
             editVideo={editVideo}
            >
          <Playbutton/>
        </Video>
        )
        }
     <div style={{clear:"both"}}></div>
    </>
    
  )
 
}
 

export default VideoList
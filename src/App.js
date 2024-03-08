import './App.css';
import Playbutton from './components/playbutton';
import Video from './components/video';
import videos from './data/data';
function App(){
        
     return (
      
       <div className='App'>
         <div className='headtitle'><h1>videos</h1></div>
         
          
           {
           videos.map(video=>
            (<Video
                 id={video.id}
                 title={video.title}
                 views={video.views}
                 time={video.time}
                 channel={video.channel} 
                 varified={video.varified}>
                <Playbutton name="play" onPlay={()=>console.log('play')} onPause={()=>console.log('pause')}>play</Playbutton>
            </Video>)
            )
          }
        <div style={{clear:"both"}}></div>
      </div>
      );
    }
export default App;


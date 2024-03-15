import { useState } from 'react';
import './playbutton.css'

function Playbutton({ onPlay,onPause}){
    
    const [playing,setPlaying]=useState(false);
   
    function handleClick(e){
        e.stopPropagation()
        if(playing) onPause();
        else onPlay(); 
        setPlaying(!playing)
    }
 return(
    <button  onClick={handleClick}>{playing?'play <':'pause ||'}</button>
 )
   
}
export default Playbutton;




import { useState } from 'react';
import './playbutton.css'
function Playbutton({ children,onPlay,onPause}){
    const [playing,setPlaying]=useState(false);
   
    function handleclick(e){
        e.stopPropagation()
        if(playing) onPause();
        else onPlay(); 
        setPlaying(!playing)
    }
 return(
    <button  onClick={handleclick}>{playing?'play <':'pause ||'}</button>
 )
}
export default Playbutton;




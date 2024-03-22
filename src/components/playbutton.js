import {useContext, useState } from 'react';
import './playbutton.css'
import ThemeContext from './Context/themeContext';



function Playbutton(){
    const themeContext=useContext(ThemeContext);
    const [playing,setPlaying]=useState(false);
    console.log('playing',playing)
   
    function handleClick(e){
        e.stopPropagation()
        if(playing) setPlaying(false);
        else setPlaying(true) ; 
        setPlaying(!playing)
    }
    return(
        <button className={themeContext} onClick={ handleClick }>{playing?'play <':'pause ||'}</button>
        )
        
    }

export default Playbutton;




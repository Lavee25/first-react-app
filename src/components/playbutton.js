import './playbutton.css'
function Playbutton({children,onPlay,onPause}){
    let playing=false;

    function handleclick(){
        if(playing) onPause();
        else onPlay(); 
        playing=!playing       
    }
 return(
    <button  onClick={handleclick}>{children}:{playing?'<':'||'}</button>
 )
}
export default Playbutton;
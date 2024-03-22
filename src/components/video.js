import './video.css';
import Counter from'./counter';
import Playbutton from './playbutton';
import { useContext } from 'react';
import ThemeContext from './Context/themeContext';
import videoDispatchContext from './Context/videodispatchContext';



function Video({id,title,channel,views,time,varified,editVideo}){
 const themeContext=useContext(ThemeContext)
 const dispatch=useContext(videoDispatchContext)
return(
<div>
    <div className={`container ${themeContext}`}>
      <button className='close'onClick={()=>dispatch({type:'DELETE',payload:id})}>X</button>
      <button className='edit'onClick={()=>editVideo(id)}>edit</button>
         <div className='pic'>
            <img 
            src={`https://picsum.photos/id/${id}/200/300`}
             width="200px" height="200px"alt='missing'></img>
         </div>
        <div className="title">{title} </div>
        < div className="channel">{channel} {varified && '✔️' } </div>
        <div className="views">
        {views}views<span>.</span>{time}
       </div>
      <div><Playbutton/></div> 
      <div> <Counter></Counter></div>
   </div>
</div>
)
}

export default Video;
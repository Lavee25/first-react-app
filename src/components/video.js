import './video.css';
function Video({id,title,channel,views,time,varified,children}){
return(
<div>
    <div className='container'>
         <div className='pic'>
            <img src={`https://picsum.photos/id/${id}/200/300`} width="200px" height="200px" alt='missing'></img>
        </div>
        <div className="title">{title} </div>
        < div className="channel">{channel} {varified && '✔️' } </div>
        <div className="views">
        {views}viws<span>.</span>{time}
        </div>
        <div>
          {children}
        </div>
  </div>
</div>
)
}

export default Video;
import { useState } from "react";

function Counter(){
    
const [number,setNumber]=useState(0);
 function handleClick(e){
     e.stopPropagation(); //used for stop expenssion of onclick event
    setNumber(number+1);
    console.log(number);

 }
return(
<>
{/* <h1>{number}</h1> */}
<button onClick={handleClick}>{'👍'}{number}</button>
</>

)



}
export default Counter;
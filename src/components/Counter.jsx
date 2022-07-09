import { useState } from "react";
import '../CSS/Counter.css'

const Counter = () => {
    const handleinc=()=>{
        setCount(count+1);
    }
    const handledec=()=>{
        setCount(count-1);
    }
    const [count, setCount] = useState(1);
    return ( 
        <div className="cc">
            <button className="butn" onClick={()=>handledec()}>-</button>
            <div className="disp">{count}</div>
            <button className="butn" onClick={()=>handleinc()}>+</button>
        </div>
     );
}
 
export default Counter;
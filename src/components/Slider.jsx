import { useState } from "react";

const Slider = () => {
    const [colour, setcolour] = useState(0);
    return (
        <div>
            <input type="range" min="0" max="360" value={colour} onChange={(e)=>setcolour(e.target.value)}  name="" id="" />
            <h1 className="ti">Hello</h1>
            <style jsx>{
                `.ti{
                    color:hsl(${colour},50%,50%);
                }`
            }</style>
            
        </div>
    );
}
 
export default Slider;
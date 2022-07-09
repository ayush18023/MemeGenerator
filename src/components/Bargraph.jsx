import React, { useState } from "react";
import '../CSS/Bargraph.css';
const Bargraph = () => {

    // const [first, setfirst] = useState(second);
    

    const data=[{val:250,tag:'Mon',id:1},{val:140,tag:'Tue',id:2},{val:100,tag:'Wed',id:3},{val:200,tag:'Thu',id:4},{val:50,tag:'Fri',id:5},{val:280,tag:'Sat',id:6},{val:0,tag:'Sun',id:7}];

    let bar='bar';
    async function setforcss(data){
        data.map(data=>{
            data.id=bar.concat(String(data.id));
            data.val=(data.val*100)/300;
            console.log(data.id)
        })
    }

    setforcss(data);
    console.log(data)

    return ( 
        <>
            <div className="zero">0%</div>
            <div className="half">50%</div>
            <div className="full">100%</div>
            <div className="boxx">
       
                {data.map((data)=>(
                    <>
                        <div className={data.id}></div>
                        <div className={data.tag}>{data.tag}</div>
                    </>
                    
                ))}       
            </div>
            <style>{
                
                data.map((data)=>`
                    .${data.id}{
                        width:30px;
                        height:${data.val}%;
                        background-color:crimson;
                        margin-left:20px;
                        animation: draw 1s ease-in-out;
                    }
                    
                    .${data.tag}{
                        position:relative;
                        left:-30px;
                        top:20px;
                    }
                    @keyframes draw{
                        0%{height:0;} 
                    }
                `)
                
            
            }</style>
        </> 

        
    );
}
 
export default Bargraph;

import { useState } from "react";
import React from 'react'
import '../CSS/tab.css'

const Tabs = () => {
    // const [tabs, settabs] = useState('hiddninfo')
    const coll=[{States:"Mumbai",decr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet!",id:1},
                {States:"Pune",decr:"Lorem ipsum dolor sit amet.",id:2},
                {States:"Nashik",decr:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",id:3}]
    const [store, setstore] = useState(1);
    
    const handledisplay=(id)=>{
        setstore(id)
    }
    
    return (
        <>
            <div className="allbutts">
                {coll.map((coll)=>(
                    <button onClick={()=>handledisplay(coll.id)}>{coll.States}</button>                  
                ))}               
            </div>
            <div>
                {coll.map((coll)=>(
                    <div className={store===coll.id?"shown":"hiddninfo"}>{coll.decr}</div>                      
                ))}
            </div>
        </>
    );
}
 
export default Tabs;

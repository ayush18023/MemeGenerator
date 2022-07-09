
import React, { useState } from 'react'

const Reddit = () => {
    const [sub, setsub] = useState();
    const [sub_name, setsub_name] = useState();

    const findsub= async (e)=>{
        e.preventDefault();
        let que=`https://www.reddit.com/r/${sub_name}.json`
        let ans= await fetch(que);
        setsub(ans.json());
        console.log(sub);
        // setsub_name(ans)
        

    }



  return (
    <>
        <input type="text" value={sub_name} onChange={(e)=>setsub_name(e.target.value)} /><br />
        <button onClick={(e)=>findsub(e)} >Submit</button>

    
    
    </>
  )
}

export default Reddit
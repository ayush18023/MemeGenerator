import React, { useEffect,useState } from 'react'
import Template from './Template';
import { Link } from 'react-router-dom';
import '../CSS/Maymay.css'
const Maymay = () => {
    // let col=[];
    // const options = {
    //     method: 'GET',
       
    // };
    
    // fetch('https://api.imgflip.com/get_memes', options)
    //     .then(response => response.json())
    //     .then(response => col=response)
    //     .catch(err => console.error(err));
    const [templates, settemplates] = useState();
    // const [textclass, settextclass] = useState('gayab');

    const getallmemes=async ()=>{
        const response= await fetch('https://api.imgflip.com/get_memes');
        const data=await response.json();
        // console.log(data.data.memes[0].url);
        settemplates(data.data.memes)
        
    }
    // const enterfunc=()=>{
    //   settextclass('imgtxt')
    // }
    // const exitfunc=()=>{
    //   settextclass('gayab')
    // }

    useEffect(() => {
      getallmemes();
      
    },[])
    
  return (
    <div className='allmemes'>
      {templates && templates.map((templates)=>(
        <Link to={"/template/".concat(templates.id)}> <div className="card"><img key={templates.id} src={templates.url} className='imgs'/><p className="imgtxt">{templates.name}</p></div> </Link>  
      ))}
      
      {console.log(templates)}
      
      
    
    </div>
    )
}

export default Maymay
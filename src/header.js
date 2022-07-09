import {useState, useEffect} from 'react'

import Bloglist from './Bloglist';
import Bargraph from './components/Bargraph';

import Counter from './components/Counter';
import Slider from './components/Slider';
import Tabs from './components/Tabs';
import Toggleswitch from './components/Toggleswitch';
const Head = () => {
    
    const [desc, setdesc] = useState('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, doloremque.');
    
    const [butt, setbutt] = useState('Read More');

    const afterclk=()=>{
        
        if(butt==='Read More'){
            setdesc('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellendus illo recusandae voluptates aperiam adipisci ea exercitationem nam blanditiis libero!')
            setbutt('Read Less')
        }
        else{
            setdesc('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, nobis?');
            setbutt('Read More')
        }

    }

    useEffect(() => {
      console.log(desc)
    
    
    },[])
    
    const [blogs, setblogs] = useState([
        {title:"New blog",description:"This is first blog", author:"Ayush",id:1},
        {title:"Second Blog",description:"This is Second blog",author:"Yash",id:2},
        {title:"Third blog",description:"This is Third blog",author:"Ayush",id:3}
    ]);

    const handledel = (id) => {
        const after_del=blogs.filter(blog=> blog.id !== id);
        setblogs(after_del);
        
    }
     
    
    return (  
        <><div className="header">
            <h2>HI {desc} </h2>
            <button onClick={afterclk}>{butt}</button>
        </div>
        <Bloglist blogs={blogs} handledel={handledel}/>
        {/* <Curtain condi={true}/> */}
        <Tabs/><br />
        <Counter/><br />
        <Toggleswitch/><br />
        <Slider/><br />
        <Bargraph/>
        
        </>
    );
}
 
export default Head;
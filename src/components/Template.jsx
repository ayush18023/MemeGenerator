import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
// const axios = require('axios');
import axios from "axios";
import '../CSS/Template.css'


const Template = (props) => {
    // imag=props.imag;
    const {id}=useParams(); 
    const [templates, settemplates] = useState();
    const [text0, settext0] = useState();
    const [text1, settext1] = useState();
    const [fonts, setfonts] = useState();
    const [result, setresult] = useState();
    const [oldclas, setoldclas] = useState('oldvisible');
    // const [btnstate, setbtnstate] = useState('disabled');

    const getallmemes=async ()=>{
        const response= await fetch('https://api.imgflip.com/get_memes');
        const data=await response.json();
        // console.log(data.data.memes[0].url);
        // for (let index = 0; index < data.data.memes.length; index++) {
        //     if(data.data.memes[index]==id){
        //         settemplates(data.data.memes[index])
        //     }    
        // }
        const my_meme=data.data.memes.filter((elem)=>{
            return elem.id===id;
        })
        settemplates(my_meme)
        // setresult(templates.url);
        
        
    }
    
    useEffect(() => {
      getallmemes();
      
    },[])
    const handlesubmit=async (e)=>{
        e.preventDefault();
        let template_id=id;
        let uptext=text0;
        let downtext=text1;
        let font_size=fonts;

        const reqs=`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${uptext}&text1=${downtext}&max_font_size=${font_size}&username=ayushmd&password=ayush1823`;

        const respons= await fetch(reqs);
        const dat=await respons.json();
        console.log(dat);
        console.log(dat.data.url)
        setresult(dat.data.url);
        setoldclas("oldinvi");
    }
    const handledload=(e)=>{
        e.preventDefault();
        axios({
            url: `${result}`, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            // console.log(url);
            
            link.setAttribute('download', 'meme.jpg'); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
    }
  return (
      <div className='template-container'>
        
        {/* {console.log(props.imag)} */}
        {templates && templates.map((temp)=>{
            return <img src={temp.url} alt="#" width="300px" height="300px" className={oldclas}/>
        })}
        {result && <img src={result} alt="" width="300px" height="300px" className='oldvisible' />}
        <form className='inputform' >
            <label>Text1:</label><br />
            <input type="text" value={text0} onChange={e=>settext0(e.target.value)}/><br />
            <label>Text2:</label><br />
            <input type="text" value={text1} onChange={e=>settext1(e.target.value)}/><br />
            <label>Font size:</label><br />
            <input type="text" value={fonts} onChange={e=>setfonts(e.target.value)}/><br />
            <button onClick={(e)=>{handlesubmit(e)}}>Submit</button>
            <button onClick={(e)=>handledload(e)} className='' >Download</button>
        </form>
        
        
      </div>
    )
}

export default Template
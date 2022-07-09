import {createContext, React, useContext, useEffect, useState} from 'react'
import '../CSS/Contactmanager.css'
import SearchIcon from '@mui/icons-material/Search';
import Contactcard from './Contactcard';
import AddIcon from '@mui/icons-material/Add';

const Usercontext = createContext();
const ContactManager = () => {
    
    const [details, setdetails] = useState()
    const [search, setsearch] = useState();
    


    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data=> {console.log(data); setdetails(data)});
        
    }, []);

    const handledel=({id})=>{
      
      console.log("clicked",id);
      const sorted=details.filter(details=>{
        return details.id!==id
      });
      console.log(sorted)
      setdetails(sorted);
    }
    
    const handlesearch=(e)=>{
      setsearch(e.target.value);


    }
    
  return (
         <div className='container'>
            <header>Contact manager</header>
            <div className='horizontal-line'></div>
            <div className='search'>
                <SearchIcon/>
                <input type="text" onChange={(e)=>handlesearch(e)}  value={search} placeholder='Search' className='searchbar' />
                <p>{search}</p>
            </div>
            <div className='allcontacts'>
                  
                {details && details.map(details =>{
                    return <Contactcard key={details.id} name={details.name} id={details.id} email={details.email} phone={details.phone} handledel={handledel}/>
                })}
            </div>
        </div>
    
  )
}

export default ContactManager
export {Usercontext};
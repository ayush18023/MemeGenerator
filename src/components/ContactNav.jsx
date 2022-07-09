import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import '../CSS/ContactNav.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    // const [clas, setClas] = useState('');

    return (    
        <>
        <div className="Head">
            <FontAwesomeIcon icon="fa-solid fa-address-book" />
            <div className="name">Contact Manager</div>
            <div className="searchbar">
                <input type="text" className='inputtag' placeholder='Search'/>
                <SearchIcon/>
            </div>
            <AddCircleIcon color='secondary' fontSize='large'/>
        </div>
            
        </>
    );
}
 
export default Navbar;
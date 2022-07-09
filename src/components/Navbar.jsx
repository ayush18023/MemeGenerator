import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'

const Navbar = () => {
    const [clas, setClas] = useState('nav-items');

    return (    
        <>
        <div className="Head">
            <div className="logo">
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"  width="40px" alt="React" /> */}
                MemeGenerator
            </div>
            <div className='options'>
                {/* <Link to="/" className= {clas}>Home</Link>
                <Link to="/Blogs" className={clas}>Blogs</Link>
                <Link to="/Tools" className={clas}>Tools</Link> */}
            </div>
            <div className="log">               
                <Link to="/" className='sign'>Home</Link>
                {/* <Link to="#" className='sign'> Log In</Link>              */}
            </div>
        </div>
            
        </>
    );
}
 
export default Navbar;

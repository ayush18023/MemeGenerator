import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ContactManager, { Usercontext } from './ContactManager'

const Contactcard = ({name , id , email , phone , handledel}) => {

    const details = useContext(Usercontext);

    
  return (
      <div className='one-full-contact'>
        <h3>{name}</h3>
        <div className='one-contact'>
            <p>{email}</p>
            <DeleteIcon onClick={()=>handledel({id})}/>
            <p>{phone}</p>
        </div>
      
      </div>
    
  )
}

export default Contactcard
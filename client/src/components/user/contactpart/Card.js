import React from 'react'
import { deletContact } from '../../../api/contactApi';
import { useNavigate } from 'react-router';

const Card = ({contact,getContact}) => {
    console.log('contact',contact)
    let navigate = useNavigate();
  const update=()=>{
  navigate(`/update/${contact._id}`)
  }
    
  return (
<div>
   
  <div>{contact.name}</div>
  <button   onClick={()=>update()}  >update</button>
  </div>  )
}

export default Card
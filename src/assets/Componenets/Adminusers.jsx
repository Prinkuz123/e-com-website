import React, { useContext, useEffect } from 'react'

import { myContext } from '../../Context/Context'
const Adminusers = () => {
  const userdetails=useContext(myContext)
  const {login,setLogin}=userdetails
  useEffect(()=>{
    console.warn(login);
  },[login])
 
  return (
    <div>
    {login.map((item)=>{
      return(
        <div>
      
        <h3>{item.name}</h3>
        <h3>{item.email}</h3>
        </div>
     )
    })}
    </div>
  )
}

export default Adminusers

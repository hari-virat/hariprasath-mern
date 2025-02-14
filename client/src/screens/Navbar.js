import React from 'react'

import Logout from './Logout';

const Navbar = () => {
  return (
    <>
    
      <div style={{textAlign:"center"}}>
        <h1>Hari Rooms</h1>
        <a href='/login'><button style={{backgroundColor:"green",color:"white",margin:"5px"}}>Login</button></a>
        <a href='/form'><button  style={{backgroundColor:"red",color:"white",margin:"5px"}}>singup</button></a>
        
        
      </div>

    </>
  )
}

export default Navbar;

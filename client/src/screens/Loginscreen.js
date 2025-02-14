import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Loginscreen = () => {
  
  const[email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const navigate = useNavigate();

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
axios.post('http://localhost:5000/login',{ email, password })

.then(result=>{
  if(result.data==="success"){
    navigate("/home");
  }
  else{
    alert("login failed: User Does not exists");
  }
})
.catch(err => console.log(err))

  };


  return (

<div className='login'>
<div  style={{paddingTop:"1%"}}>
        <h1  style={{textAlign:"center",color: "orange"}}>Hari Rooms</h1>
       
        <a href='/'><button  style={{backgroundColor:"red",fontSize:"15px",borderRadius:"7px",border:"none",padding:"5px",color:"white",margin:"5px",position:"relative",left:"80%"}}>singup</button></a>
        <a href='/login'><button style={{backgroundColor:"green",fontSize:"15px",borderRadius:"7px",border:"none",padding:"5px",color:"white",margin:"5px",position:"relative",left:"80%"}}>Login</button></a>
</div>


  
    


    <div style={{padding:"9%",textAlign:"center"}}>
    <div  className='log-form'>
    <h2  style={{color: "pink",fontSize:"20px"}}>Login</h2>
      
    <form onSubmit={handleSubmit} >
    
      <table>
    
 <tr><td>
<input type="text" placeholder='email' style={{backgroundColor:"silver",border:"none",padding:"3px",borderRadius:"4px"}}
      value={email} onChange={(e) =>setEmail(e.target.value)}/></td></tr>

<tr><td> <input type="password" placeholder='password' style={{backgroundColor:"silver",border:"none",padding:"3px",borderRadius:"4px"}}
      value={password}  onChange={(e) =>setPassword(e.target.value)}/></td></tr>
<tr><td> <button  className='btn-log' type="submit">Login</button></td></tr>

            </table>
           
    </form>


    </div>
    </div>
    </div>
  
  )
}

export default Loginscreen;

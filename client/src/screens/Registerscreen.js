import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Registerscreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post('http://localhost:5000/', { name, email, password })
      .then(result => {
        if (result.status == 201) {
          console.log("User created successfully");
          navigate("/login");
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          window.alert("Email already exists. please use a different email")
        } else {
          console.log(err);
        }
      })
  };


  return (
    <div className='register' >
      <div style={{padding:"1%"}}>
      <h1 style={{ textAlign: "center", color: "orange"}}>Hari Rooms</h1>

      <a href='/'><button  style={{backgroundColor:"red",fontSize:"15px",borderRadius:"7px",border:"none",padding:"5px",color:"white",margin:"5px",position:"relative",left:"80%"}}>singup</button></a>
        <a href='/login'><button style={{backgroundColor:"green",fontSize:"15px",borderRadius:"7px",border:"none",padding:"5px",color:"white",margin:"5px",position:"relative",left:"80%"}}>Login</button></a>
</div>

        
     
<div style={{textAlign:"center",padding:"8%"}}>
        <div  className='reg-form' >
        <h2 style={{color:"pink",fontSize:"20px"}} >Singup</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tr><td>
              <input type="text" placeholder='username' style={{ backgroundColor: "silver", border: "none", padding: "3px", borderRadius: "4px" }}
                value={name} onChange={(e) => setName(e.target.value)} /></td></tr>

            <tr><td><input type="text" placeholder='email' style={{ backgroundColor: "silver", border: "none", padding: "3px", borderRadius: "4px" }}
              value={email} onChange={(e) => setEmail(e.target.value)} /></td></tr>

            <tr><td><input type="password" placeholder='password' style={{ backgroundColor: "silver", border: "none", padding: "3px", borderRadius: "4px" }}
              value={password} onChange={(e) => setPassword(e.target.value)} /></td></tr>

                <tr><td><button className='btn-reg' type="submit">Singup</button></td></tr>
          </table>
        </form>
        
        </div>

        </div>
      

    </div>



  )

}
export default Registerscreen;

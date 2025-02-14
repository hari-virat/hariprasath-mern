import React from 'react'
import coimbatore from './placeimage/coimbatore.mp4'
import kodai from './placeimage/kodai.mp4'
import kutralam from './placeimage/kutralam.mp4'
import ooty from './placeimage/ooty.mp4';




const Homescreen1 = () => {
  return (
    <div>






  <div className='home-container' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>

    <div className='esha'><a href='/esha'>
      <video style={{width:"300px",height:"300"}} src={coimbatore} autoPlay loop muted />
      </a>
      <a className='esha-title' href='/esha'><p style={{textAlign:"center",color:"lightpink"}}>COIMBATORE</p></a>
      </div>



       <div className='kodai'><a href='/kodai' >
      <video style={{width:"300px",height:"300"}} src={kodai} autoPlay loop muted />
      </a>
      <a  className='esha-title' href='/kodai'> <p style={{textAlign:"center",color:"lightpink"}} >KODAIKANAL</p></a>
      </div>

      <div className='kutralam' ><a href='/kutralam'>
      <video style={{width:"300px",height:"300"}} src={kutralam} autoPlay loop muted />
      </a>
      <a className='esha-title' href='/kutralam'> <p style={{textAlign:"center",color:"lightpink"}}>COURTALLAM</p></a>
      </div>

      <div className='ooty'><a href='/ooty'> 
      <video style={{width:"300px",height:"300"}} src={ooty} autoPlay loop muted />
      </a>
      <a className='esha-title' href='/ooty'><p style={{textAlign:"center",color:"lightpink"}}>OOTY</p></a>
      </div>
      </div>

      </div>

  
  )
}

export default Homescreen1;

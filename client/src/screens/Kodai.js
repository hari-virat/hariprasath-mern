import React from 'react'

import hottel_7 from './images/hottel 7.jpg';
import hottel_8 from './images/hottel 8.jpg';
import hottel_9 from './images/hottel 9.jpg';





const Kodai = () => {
  return (
    <div className='kodai-container' style={{padding:"40px"}} >
      <h1 style={{textAlign:"center",color:"lightpink",padding:"10px"}}>KODAIKANAL NEARBY HOTELS</h1>

      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}} >

<div style={{width:"350px",marginBottom:"10%"}}>
<a href='/booking'>
<img src={hottel_7} alt="" style={{width:"350px",height:"350px"}}/></a>
<b style={{color:"orange",position:"relative",left:"70px",top:"5px"}}>ZOSTEL KODAIKANAL</b>
       <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>address </span>: Like a Near Kodaikanal Lake | 2.9 km drive to Bryant Park
                                               Bed In A Hotel Sleeps 1 Gues</p>

    <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>reviews :</span> Spacious common areas to meet new people, 
                    beautiful views, budget-friendly and ideal for solo travelers </p> 

</div>

<div style={{width:"350px",marginBottom:"10%"}}>
<a href='/booking'>
<img src={hottel_8} alt="" style={{width:"350px",height:"350px"}}/></a>
<b style={{color:"orange",position:"relative",left:"90px",top:"5px"}}>POPPYS PLEASANT STAY</b>
       <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>address :</span> Near Kodaikanal Lake | 1.5 km drive to Bryant Park</p>

        <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>reviews : </span>Free ParkingFree Restarent,
          Prime location near Kodai Lake, kids play area, comfortable and well-maintained rooms </p> 
</div>

<div style={{width:"350px",marginBottom:"10%"}}>
<a href='/booking'>
<img src={hottel_9} alt="" style={{width:"350px",height:"350px"}}/></a>
<b style={{color:"orange",position:"relative",left:"115px",top:"5px"}}>HOTEL HAMUSE</b>
       <p style={{color:"lightpink"}}><span style={{color:"orange"}}>address :</span>Near Kodaikanal Lake | 9 minutes walk to Bryant Park
       Located in the heart of Kodaikanal, rooftop restaurant with great city views, </p>
        <p style={{color:"lightpink"}}><span style={{color:"orange"}}>reviews :</span> Free Parking Restaurant beautiful views,
        budget-friendly and ideal for solo travelers , delicious food</p> 
</div>

</div>



</div>



  
  )
}

export default Kodai

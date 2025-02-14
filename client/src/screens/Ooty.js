import React from 'react';

import hottel_4 from './images/hottel 4.jpg';
import hottel_5 from './images/hottel 5.jpg';
import hottel_6 from './images/hottel 6.jpg';



const Ooty = () => {
  return (
    <div  className='ooty-container'  style={{padding:"40px"}}>
<h1 style={{textAlign:"center",color:"lightpink",padding:"10px"}}>OOTY NEARBY HOTELS</h1>

      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}} >

<div style={{width:"350px",margin:"20px",marginBottom:"8%"}}>
<a href='/booking'>
<img src={hottel_4} alt="" style={{width:"350px",height:"350px"}}/></a>
<b style={{color:"orange",position:"relative",left:"100px",top:"5px"}}> KURINJI RESIDENCY</b>
       <p style={{color:"lightpink"}}><span style={{color:"orange"}}>address</span>:
           2.9 km of Ooty Lake and less than 1 km of Ooty Bus Station,
 kurinji residency features accommodation with a terrace and free WiFi as well as free private parking for guests...</p>

    <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>reviews :</span> The place was spacious and a bit away from all the traffic.
     The service was good, I mean the person who attended did good and clarified .
</p> </div>


<div style={{width:"350px",margin:"20px"}}>
<a href='/booking'>
<img src={hottel_5} alt="" style={{width:"350px",height:"350px"}}/></a>
<b style={{color:"orange",position:"relative",left:"115px",top:"5px"}}>BEVERLY VILLA</b>
       <p style={{color:"lightpink"}}><span style={{color:"orange"}}>address</span>:
        4 km from Ooty Lake, Beverly villa provides accommodation with a garden,
                      free private parking, a shared lounge and a terrace.</p>

    <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>reviews :</span> The place was spacious and a bit away from all the traffic.
     The service was good, I mean the person who attended did good and clarified things.
</p> 
</div>

<div style={{width:"350px",margin:"20px"}}>
<a href='/booking'>
<img src={hottel_6} alt="" style={{width:"350px",height:"350px"}}/></a>
<b style={{color:"orange",position:"relative",left:"115px",top:"5px"}}>ASTORIA RESIDENCY</b>
       <p style={{color:"lightpink"}}><span style={{color:"orange"}}>address</span>:
 3.6 km from Ooty Lake, Astoria Residency features accommodation with a garden, free private parking, a shared lounge and a terrace</p>

    <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>reviews :</span> The place was spacious and a bit away from all the traffic.
     The service was good, I mean the person who attended did good...
</p> 
</div>





</div>


</div>





    
  )
}

export default Ooty

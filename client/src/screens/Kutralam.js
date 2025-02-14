import React from 'react';

import hottel_1 from './images/hottel 1.jpg';
import hottel_2 from './images/hottel 2.jpg';
import hottel_3 from './images/hottel 3.jpg';



const Kutralam = () => {
  return (
    <div className='kutralam-container' style={{padding:"40px"}} >
 <h1 style={{textAlign:"center",color:"lightpink",padding:"10px"}}>COURTALLAM NEARBY HOTELS</h1>
      <div  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}} >

      <div style={{width:"350px",margin:"20px",marginBottom:"8%"}}>
  <a href='/booking'>
  <img src={hottel_1} alt="" style={{width:"350px",height:"350px"}}/></a>
  
  <b style={{color:"orange",position:"relative",left:"70px",top:"5px"}}>ESAKKI HIGHVIEW RESORT</b>
       <p style={{color:"lightpink"}}><span style={{color:"orange"}}>address</span>: Set in Kuttālam, 28 km from Palaruvi Waterfall,
       ESAKKI HIGHVIEW RESORT - fivefalls, free private parking, a garden and a terrace. 
</p>

    <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>reviews :</span>  just within walkable distance of Five Falls which is more advantage to staying here..
     it's perfectly suited for families and the demand for their rooms will be too high since
       </p> 

  </div>

  <div style={{width:"350px",margin:"20px"}}>
  <a href='/booking'>
  <img src={hottel_2} alt="" style={{width:"350px",height:"350px"}}/></a>
  <b style={{color:"orange",position:"relative",left:"90px",top:"5px"}}>GREEN GARDEN RESORT</b>
       <p style={{color:"lightpink"}}><span style={{color:"orange"}}>address</span>: 
       1.8 km from centre
       Set in Kuttālam, 11 km from Shendurney Wildlife Sanctuary,  features a Spa and a restaurant</p>

    <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>reviews :</span>whenever I used to visit Courtrallam I stayed at this property... 
    almost I have stayed 4 times at this property..it was such a good ambiance and pleasant atmosphere to stay in.
    </p> 

  </div>

  <div style={{width:"350px",margin:"20px"}}>
  <a href='/booking'>
  <img src={hottel_3} alt="" style={{width:"350px",height:"350px"}}/></a>
  <b style={{color:"orange",position:"relative",left:"115px",top:"5px"}}>FALLS MANSION</b>
       <p style={{color:"lightpink"}}><span style={{color:"orange"}}>address</span>: Courtallam | 1.3 km drive to Kutralam Falls</p>

    <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>reviews :</span> The place was spacious and a bit away from all the traffic.
     The service was good, I mean the person who attended did good and clarified things.
</p> 

  </div>



  

</div>



    </div>
  )
}

export default Kutralam

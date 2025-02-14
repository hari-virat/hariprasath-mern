import React from "react";
import hottel_10 from './images/hottel 10.jpg';
import hottel_11 from './images/hottel 11.jpg';
import hottel_12 from './images/hottel 12.jpg';



const Esha = () => {
  
  return (
    <div className="esha-container" style={{padding:"40px"}}> 
<h1 style={{textAlign:"center",color:"lightpink",padding:"10px"}}>ISHA YOGA CENTER COIMBATORE NEARBY HOTELS</h1>

      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}} >
      
      <div style={{width:"350px",margin:"20px",marginTop:"",marginBottom:"10%",}}>
  <a href='/booking'>
  <img src={hottel_10} alt="" style={{width:"350px",height:"350px"}}/></a>
  <b style={{color:"orange",position:"relative",left:"70px",top:"5px"}}>HOTEL PRINCE GARDENS</b>
       <p style={{color:"lightpink"}}><span style={{color:"orange"}}>address : </span>Nearby - "My stay at PRINCE gardens hottel during Mahashiva Ratri at 
                         isha Yoga Center Coimbatore"</p>
        <p style={{color:"lightpink"}}> <span style={{color:"orange"}}>reviews :</span> The room was good. Nice and comfortable bed, fresh linen,
        Tea coffee effects were sufficient, Bathroom was neat and clean with running hot water</p> 
  
  </div>


  <div style={{width:"350px",margin:"20px",marginTop:"",color:"white"}}>
  <a href='/booking'>
  <img src={hottel_11} alt="" style={{width:"350px",height:"350px"}}/></a>
  <b style={{color:"orange",position:"relative",left:"70px",top:"5px"}}>SREE BHART RESIDENCY </b>
  <p  style={{color:"lightpink"}}><span style={{color:"orange"}}>address : </span> Coimbatore (4.7 km from Isha Yoga Centre)
               Sree Bharat Residency features
               accommodation with a garden, free private parking, a terrace and a restaurant.</p>
  <p  style={{color:"lightpink"}}><span style={{color:"orange"}}>reviews :</span> Courteous, well-trained and extremely responsive staff, restaurant in-house,
            good ambience. Beautiful location in a dreamy far-off peaceful village setting.</p>  
               
  </div>

  <div style={{width:"350px",margin:"20px",marginTop:"",color:"white"}}>
  <a href='/booking'>
  <img src={hottel_12} alt="" style={{width:"350px",height:"350px"}}/></a>
  <b style={{color:"orange",position:"relative",left:"100px",top:"5px"}}>IKON Annapoorna</b>
 <p style={{color:"lightpink"}}><span style={{color:"orange"}}>address : </span> Located in Coimbatore, 11 km from Codissia Trade Fair Complex, IKON By Annapoorna provides accommodation
 with a fitness centre, free private parking. </p>
<p style={{color:"lightpink"}}><span style={{color:"orange"}}>reviews :</span> The room was good. Nice and comfortable bed, fresh linen,
  Tea coffee effects were sufficient, Bathroom was neat and clean with running hot water
</p>

  </div>

  </div>
  

</div>
  )
}

export default Esha;

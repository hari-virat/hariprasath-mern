
import React,{useState} from "react";
import StripeCheckout from "react-stripe-checkout";
import hottel_12 from './images/hottel 12.jpg';

const Booking = () => {
  
  const [product,setProduct] = useState({
    name:"hari rooms",
    price: 1500 *100,
  });
const makePayment = (token)=>{
const body = {
  token,
  product
}
const headers = {
"content-type":"application/json"
}
return fetch("http://localhost:5000/payment",{
  method:"post",
  headers,
  body:JSON.stringify(body)
}).then((response)=>{
  console.log(response);
}).catch((err)=>{
  console.log(err)
});
};



  return (
    <div className="booking-page">
      <StripeCheckout
      stripeKey="pk_test_51QRySQSCY1uJ46WiiZENrwaAXrwkxRx0p74y8QOibwXIHNaQ8FzMJ2KS11DSzs4pRLJV179oozIYZj5f0F3A5bVV00H9ehp1qm"
      token={makePayment}
       name = "HARI ROOMS"
       amount={product.price }
       currency="INR">
      
        
        
        <div className="booking-container" style={{textAlign:"center"}}>
        <img src={hottel_12} alt="" style={{width:"250px",height:"250px",paddingTop:"3%"}}/>
             <b style={{color:"orange",fontSize:"30px",display:"block",padding:"8px"}}>booking details</b>
              <b style={{fontSize:"25px" ,color:"lightpink",display:"block",padding:"5px"}}>max count : 3</b>
             <b style={{fontSize:"25px",color:"lightpink",display:"block",padding:"5px"}}>Rent per day : $ 1500</b>
             <button className="booking-button">book now</button>
             </div>
            
             

      </StripeCheckout>
      
    </div>
  )
}

export default Booking;


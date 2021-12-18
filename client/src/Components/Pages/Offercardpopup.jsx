import Modal from  "react-modal"
import { useState } from "react";
import axios from "axios";
import { border, borderRadius, color, width } from "@mui/system";
import "./offercardpopup.css"
import { useCallback } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import cross from "./icons/crossicon.svg"
import arrow from "./icons/arrow-right.svg"
import tick from "./icons/Tick.svg"

// import Auth from './Pages/Auth/Auth';
import { useSelector } from 'react-redux';

Modal.setAppElement("#root")
export const Offercart=({isopen, setIsOpen,price, courseId, videoStatus,setVideoStatus })=> {
//   const [isopen,setIsOpen]=useState(false)
//   const handleclick=()=>{
//       setIsOpen(true)

//   }


const { isAuth, user } = useSelector((store) => store.auth);


  const updateData = async () => {
    const id = {
      courses : courseId
    }
    const {data} = await axios.patch(`http://localhost:2345/profile/${user.user._id}`, id);
    console.log(user.user._id);
    // console.log(data.user.courses);
    console.log(data);
    if(data.user.courses.includes(courseId)) {
      setVideoStatus(false);
    } 
    
    localStorage.setItem("data", JSON.stringify(data))
  }
  



//payment code

const Razorpay = useRazorpay();

  const handlePayment =  useCallback( () => {
    const order = {
        "amount": 1000,
        "currency": "INR",
        "receipt": "rcptid_11",
       
    }

    const options: RazorpayOptions = {
      key: "rzp_test_WVl89PSwPNGgbZ",
      amount: "50000",
      currency: "INR",
      name: `${user.name}`,
      description: "Test Transaction",
      image: `${user.picture}`,
      order_id: order.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: `${user.name}`,
        email: `${user.email}`,
        contact: "",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#f09951",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
    updateData();
  }, [Razorpay]);

    
  return (
    <div>
        {/* <button onClick={handleclick}>Open</button> */}
       
     <Modal isOpen={isopen} onRequestClose={()=>setIsOpen(false)} shouldCloseOnOverlayClick={false} style={{
         overlay:{
             background : "rgba(0, 0, 0, 0.6)"
         },
         content:{
             backgroundColor:"#1A1D24",
            
             width: "30%",
             maxHeight:"600px",
            
            //  marginTop:"0%",
             marginLeft:"35%",
             marginRight:"35%",
             borderRadius:'20px',
             border:"none"

         }

     }}>
         
         <img className="cross" src={cross} alt="" onClick={()=>setIsOpen(false)}></img>
         <h1 className="offermodal1" style={{width:"50%",margin:"auto"}}>₹499</h1>
         <p className="offermodal2">Get 1 year access to:</p>
         <div style={{width:"60%",margin:"auto"}}>
         <div style={{display:"flex"}}>
             <img  src={tick}></img>
             <p className="offermodal3">All lessons delivered by Ritesh Agarwal</p>
         </div>
         <div style={{display:"flex"}}>
             <img  src={tick}></img>
             <p className="offermodal3">Signed certificate by Ritesh Agarwal</p>
         </div>
         <div style={{display:"flex"}}>
             <img  src={tick}></img>
             <p className="offermodal3">Detailed workbooks and exercises</p>
         </div>
         </div>
         <div className="insidemodal">
             <p className="offermodal4">SPECIAL OFFER</p>
             <p className="offermodal5">Limited time only!</p>
             <p className="offermodal6">UNLOCK ALL OUR 17 COURSES, WORKBOOKS AND CERTIFICATES FOR JUST <span className="offermodal_s" > ₹199</span> MORE. VALID FOR <span className="offermodal_s" > 1 YEAR</span></p>
                <div className="checkbox">
                    <input type="checkbox" className="checkbox1"/> 
                    <label className="checkbox2" >ADD</label>
                    

                </div>
         </div>
         <button onClick={handlePayment} className="offerbutton">START LEARNING <span src={arrow} alt=""></span></button>
         
         
     </Modal>
    </div>
  );
}
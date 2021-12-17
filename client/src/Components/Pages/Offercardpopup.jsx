
import Modal from  "react-modal"
import { useState } from "react";
import { border, borderRadius, color, width } from "@mui/system";
import "./offercardpopup.css"

Modal.setAppElement("#root")
export const Offercart=({isopen, setIsOpen})=> {
//   const [isopen,setIsOpen]=useState(false)
//   const handleclick=()=>{
//       setIsOpen(true)

//   }
    
  return (
    <div>
        {/* <button onClick={handleclick}>Open</button> */}
       
     <Modal isOpen={isopen} onRequestClose={()=>setIsOpen(false)} style={{
         overlay:{
             background : "rgba(0, 0, 0, 0.6)"
         },
         content:{
             backgroundColor:"#1A1D24",
            
             width: "30%",
             height:"750px",
             marginTop:"0%",
             marginLeft:"35%",
             marginRight:"35%",
             borderRadius:'20px',
             border:"none"

         }

     }}>
         
         <img className="cross" src="cross icon.svg" alt="" onClick={()=>setIsOpen(false)}></img>
         <h1 className="offermodal1" style={{width:"50%",margin:"auto"}}>₹499</h1>
         <p className="offermodal2">Get 1 year access to:</p>
         <div style={{width:"60%",margin:"auto"}}>
         <div style={{display:"flex"}}>
             <img  src="Tick.svg"></img>
             <p className="offermodal3">All lessons delivered by Ritesh Agarwal</p>
         </div>
         <div style={{display:"flex"}}>
             <img  src="Tick.svg"></img>
             <p className="offermodal3">Signed certificate by Ritesh Agarwal</p>
         </div>
         <div style={{display:"flex"}}>
             <img  src="Tick.svg"></img>
             <p className="offermodal3">Detailed workbooks and exercises</p>
         </div>
         </div>
         <div className="insidemodal">
             <p className="offermodal4">SPECIAL OFFER</p>
             <p className="offermodal5">Limited time only!</p>
             <p className="offermodal6">UNLOCK ALL OUR 17 COURSES, WORKBOOKS AND CERTIFICATES FOR JUST <span className="offermodal_s" > ₹199</span> MORE. VALID FOR <span className="offermodal_s" > 1 YEAR</span></p>
                <div className="checkbox">
                    <input type="checkbox" className="checkbox1"/> 
                    <label className="checkbox2">ADD</label>
                    

                </div>
         </div>
         <button className="offerbutton">START LEARNING <span src="aarow-right.svg" alt=""></span></button>
         
         
     </Modal>
    </div>
  );
}

      
    

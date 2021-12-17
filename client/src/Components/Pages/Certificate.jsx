
import "./certificate.css"
 import certificate from "./Auth/images/certificate1.png"


export const Certificate=()=>{
    return(
        <div style={{width:"80%",margin:"auto"}}>
            <div className="c_main">
                <div className="c_image" style={{backgroundSize: "100% 100%", backgroundRepeat : "no-repeat", backgroundImage: `url(${certificate})`}}>
                <div className="uuuu">
                    <img  className="c_right1" src="sign2.png"></img>
                   
                    <p className="c_right2">RITESH AGARWAL</p>
                    <p className="c_right3">ENTREPRENEURSHIP 101</p>
                    </div>

             {/* <div className="c_image">
                  <img src="certificate1.png" alt=""></img> */}
                </div>
                <div className="c_data">
                    <p className="c_left1">CERTIFICATE</p>
                    <p className="c_left2">OF COMPLETION</p>
                   
                    <p className="ddd"></p>
               
                    <p className="c_left3">ACKNOWLEDGING THAT</p>
                    <p className="c_left4">hai sample</p>
                    <p className="c_left5"> HAS SUCCESSFULLY COMPLETED</p>
                    <p className="c_left6"> ENTREPRENEURSHIP</p>
                    <img src="sign.png"></img>
                    <p></p>
                    <img className="c_left7" src="M_logo.png"></img>
                    <p className="c_left8">Mento</p>

                </div>
            </div>
            
        </div>
    )
}
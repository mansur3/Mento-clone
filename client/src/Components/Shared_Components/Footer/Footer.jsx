import "./footer.css"




export const Footer=()=>{
    return(
        <div className="footer_main">
        <div style={{width:"38%", margin:"auto",padding:"1%"}}>
          <div className="footer_icons">
              <img src="Youtube.svg" alt="Youtube"></img>
              <img src="Facebook.svg" alt="facebook"></img>
              <img src="Instagram.svg" alt="instagram"></img>
              <img src="Twitter.svg" alt="twitter"></img>
          </div>
          <div className="footer_tab">
              <p>ABOUT</p>
              <p>FAQ</p>
              <p>TERMS OF SERVICE</p>
              <p>PRIVACY POLICY</p>
              <p> CONTACT US</p>
          </div>
          <div>
              <p className="footer_last">COPYRIGHT @GRADESDONTMATTER PVT LTD</p>
          </div>
        </div>
        </div>
    )
}
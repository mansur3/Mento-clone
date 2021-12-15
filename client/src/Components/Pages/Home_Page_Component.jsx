import "./home_page_component.css"




export const Home_Component=()=>{
    return(
        <div className="HPCmain" >
        <div  style={{maxWidth:362,maxHeight:398,margin:10 , overflow:"hidden"}}  >
            <div  style={{backgroundImage:`url('${process.env.PUBLIC_URL}/img1.png')`,
             maxWidth:"98%",
             maxHeight:240, overflow:"hidden"}} className="hover" >
             <div style={{width:"98%",height:240}}>
       
        </div>    
    </div>
    <div> <img  className="playbutton" src="Play button.svg" alt=""></img></div>
    
            <div className="rectangle"></div>
            <div className="rectangle01" >
                <p className="Coursename">Film-making</p>
            </div>
            <div className="HPC01">
              <img  className="image" src="img1.png" alt=""></img>
                
                <div >
                    <p className="HPC01name">Name</p>
                    <p className="HPC01D">Discription</p>
                </div>
                <div className="HPC02">
                    <p className="HPC01number">9</p>
                    <p className="HPC01videos">videos</p>
                </div>
            </div>

        </div>
        </div>
    )
}



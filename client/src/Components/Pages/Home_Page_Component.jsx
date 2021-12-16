import "./home_page_component.css"




export const Home_Component=({course})=>{
    return(
        <div className="HPCmain" style = {{backgroundColor : "white"}} >
        <div  style={{maxWidth:430,maxHeight:398,  overflow:"hidden"}}  >
            <div  style={{backgroundImage:`url('${course.sampleImage}')`,
             maxWidth:"100%",
             backgroundSize : "100% 100%",
             backgroundRepeat : "no-repeat",
             borderTopLeftRadius : "18px",
             borderTopRightRadius : "18px",

             maxHeight:240, overflow:"hidden"}} className="hover" >
             <div style={{width:"98%",height:240}}>
       
        </div>    
    </div>
    <div> <img  className="playbutton" src="Play button.svg" alt=""></img></div>
    
            <div className="rectangle"></div>
            <div className="rectangle01" >
                <p className="Coursename">{course.courseName}</p>
            </div>
            <div className="HPC01">
              <img  className="image" src="img1.png" alt=""></img>
                
                <div >
                    <p className="HPC01name">{course.authorName}</p>
                    <p className="HPC01D">{course.authorDetails}</p>
                </div>
                <div className="HPC02">
                    <p style = {{marginLeft : "-30px"}} className="HPC01number">{course.totalVideo}</p>
                    <p className="HPC01videos">videos</p>
                </div>
            </div>

        </div>
        </div>
    )
}




import "./certificate.css"
 import certificate from "./Auth/images/certificate1.png"
 import sign1 from "./Auth/images/sign.png"
 import sign2 from "./Auth/images/sign2.png"
 import M_logo from "./Auth/images/M_logo.png"

 import { useRef, useState, useEffect } from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import {useParams} from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context-api/Context";
import { useSelector, useDispatch } from 'react-redux';



export const Certificate=()=>{

    const { id } = useParams();
    const { lesson } = useContext(AppContext);
    const [all, setAll] = useState({});
    const [authorAbouta, setAuthorAbout] = useState([]);
    const [allVideo, setAllVideo] = useState([]);
    const [author, setAuthor] = useState("");
    const [courseName, setCourseName] = useState("");
    const [image, setImage] = useState("")


    const { isAuth, user } = useSelector((store) => store.auth);




    const getData = () => {
        let data = lesson.map((e) => {
          if (e._id === id) {
            setAll(e);
            setAuthor(e.authorName);
            setCourseName(e.courseName);
            setImage(e.backgroundImage);
            // setPrice(e.AfterDiscount)
            setAuthorAbout(e.authorAbout);
            setAllVideo(e.allVideos);
            
            // setVideoStatus(e.lockStatus);
          }
        });
      };
    //   console.log(user.user.name)
      // console.log(allVideo[0].image);
    
      useEffect(() => {
        getData();
        if (localStorage.getItem("loginMethod") === "Fastlogin") {
          // fetchUser()
        }
        // console.log(user);
        var data = JSON.parse(localStorage.getItem("data"));
        // console.log(data);
        // console.log(user.user.courses);
        if(isAuth) {
          if(data.user.courses.includes(id)) {
            // setVideoStatus(false);
          }
        }
      }, []);










    const [layoutSelection, setLayoutSelection] = useState({
        text: "A4",
        value: "size-a4"
      });
      const pdfExportComponent = useRef(null);

      const updatePageLayout = (event) => {
        setLayoutSelection(event.target.value);
      };
    
      const handleExportWithComponent =(event) => {
        pdfExportComponent.current.save();
      }

    return(
        <div id="example">
        <div style = {{marginLeft : "50%"}} className="box wide hidden-on-narrow">
          <div className="box-col">
            
            <Button primary={true} onClick={handleExportWithComponent}>
              Download Certificate
            </Button>
          </div>
        </div>
        <div className="page-container hidden-on-narrow">
          <PDFExport ref={pdfExportComponent}>
            <div className={`pdf-page ${layoutSelection.value}`}>
              <div className="inner-page">
                <div style={{ width: "80%", margin: "auto" }}>
                  <div className="c_main">
                    <div
                      className="c_image"
                      style={{
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${image})`
                      }}
                    >
                      <div className="uuuu">
                        <img className="c_right1" src={sign2}></img>
  
                        <p className="c_right2">{author}</p>
                        <p className="c_right3">{courseName}</p>
                      </div>
  
                      {/* <div className="c_image">
                    <img src="certificate1.png" alt=""></img> */}
                    </div>
                    <div className="c_data">
                      <p className="c_left1">CERTIFICATE</p>
                      <p className="c_left2">OF COMPLETION</p>
  
                      <p className="ddd"></p>
  
                      <p className="c_left3">ACKNOWLEDGING THAT</p>
                      <p className="c_left4">{user.user.name}</p>
                      <p className="c_left5"> HAS SUCCESSFULLY COMPLETED</p>
                      <p className="c_left6"> {courseName}</p>
                      <img src={sign1}></img>
                      <p></p>
                      <img className="c_left7" src={M_logo}></img>
                      <p className="c_left8">Mento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PDFExport>
        </div>
      </div>
    )
}
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context-api/Context";
import {Link} from "react-router-dom";

import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import logo2 from "./enrollNow.svg";
import right from "./Vector.svg";
import PlayButton from "./Playbutton.svg";
import Favorite from "./favorite.svg";
import DC from "./DownloadCertificate.svg";
import Certificate from "./Certificate.svg";
import DB from "./DB.svg";
import pdf from "./pdf.svg";
import time from "./time.svg";
import whatnew from "./whatsnew.svg";
import lock from "./lock.svg";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";





import Modal from "@mui/material/Modal";
import "./trailer/trailer.css";
import Navbar from "../Shared_Components/Navbar/Navbar"



import {Offercart} from "../Pages/Offercardpopup";


import Auth from '../Pages/Auth/Auth';
import { useSelector, useDispatch } from 'react-redux';

import {authSuccess, authFailure} from "../../Store/Auth/actions.js";
import axios from "axios";

// import { First } from "../landingPage/firstThing/first";
// import { Comment } from "../landingPage/comment/Comment";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "450px",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  zIndex: "-1",
  boxShadow: 24,
  //   p: 0,
};




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SingleTopicMainPage = () => {
  const { id } = useParams();
  const { lesson } = useContext(AppContext);
  const [all, setAll] = useState({});
  const [authorAbouta, setAuthorAbout] = useState([]);
  const [allVideo, setAllVideo] = useState([]);
  const [authorNamea, setAuthorName] = useState("");


// trailer code
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  //Offer card popups


  const [isopen,setIsOpen]=useState(false)
  const handleclick=()=>{
    setIsOpen(true)

}


//isAuth 


const { isAuth, user } = useSelector((store) => store.auth);
const [show, setShow] = useState("login")

    const setSign = (e) => {
        setShow(e);
    }
    // console.log(user);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }
// console.log(isAuth, user);



{/* <Auth
                head={show === "sign" ? "Join Us!" : "Welcome Back!"}
                subhead={show === "sign" ? "SIGN UP WITH" : "LOGIN WITH"}
                bottomText1={show === "sign" ? "Are you already a member ?" : "Not a member yet ?"}
                bottomText2={show === "sign" ? "LOG IN" : "SIGN UP"}
                display="LOGIN"
                setStatus={setSign}
                storedStatus={show}
            ></Auth> */}

const dispatch = useDispatch();
            const fetchUser = () => {
              axios
                .get("http://localhost:2345/profile", { withCredentials: true })
                .then(res => {
                  // console.log("data", res.data)
                  localStorage.setItem('data', JSON.stringify(res.data));
                  dispatch(authSuccess(res.data))
                  // setName(res.data.user.name)
                })
                .catch(err => {
                  console.log("Not properly authenticated!");
                  console.log("Error", err);
                  dispatch(authFailure(err))
                })
            }











    const [videoStatus, setVideoStatus] = useState(false);
    const [price, setPrice] = useState("")

  const getData = () => {
    let data = lesson.map((e) => {
      if (e._id === id) {
        setAll(e);
        setPrice(e.AfterDiscount)
        setAuthorName(e.authorName)
        setAuthorAbout(e.authorAbout);
        setAllVideo(e.allVideos);
        
        setVideoStatus(e.lockStatus);
      }
    });
  };
  // console.log(user.id)
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
        setVideoStatus(false);
      }
    }
  }, []);

  return (
    <>
      <Offercart price = {price} authorName = {authorNamea} courseId = {id}  videoStatus = {videoStatus} setVideoStatus = {setVideoStatus} isopen = {isopen} setIsOpen = {setIsOpen} />
      <Box sx={{ flexGrow: 1, backgroundColor: "#242833" }}>
      {/* <Trailer clickEvent = {handleClick} trailer = {all.trailer} /> */}

{/* trailer code */}
<div>
     
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <svg
            className="cross_icon_trailer"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClose}
          >
            <path
              d="M4 4L20 20M20 4L12 12L4 20"
              stroke="#64666B"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <iframe
            position="absolute"
            src={all.trailer}
            title="samplezoomvideo"
            frameborder="0"
            width="949px"
            height="540px"
            allowFullScreen="true"
          ></iframe>
        </Box>
      </Modal>
    </div>

{/* end trailer code */}


        <div
          style={{
            backgroundSize: "100% 1000px",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${all.backgroundImage})`,
          }}
        >
          <Box>
          <Navbar style = {{marginLeft : "100px"}} />
          </Box>
          
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
              color: "white",
            }}
            component="div"
          >
            <Box sx={{ textAlign: "center", m: 1 }}>
              LEARN FROM
              <div
                style={{ width: "900px", margin: "auto", textAlign: "center" }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "52px",
                    fontFamily: "Roboto Slab",
                    fontWeight: "700",
                    lineHeight: "2",
                    color: "white",
                  }}
                  component="div"
                >
                  {all.smallDescriptionAboutCourse}
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    paddingRight: 4,
                    lineHeight: "2",
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "white",
                    mt: "5px",
                  }}
                  component="div"
                >
                  AT{" "}
                  <span style={{ textDecoration: " line-through" }}>
                    {" "}
                    ₹{all.mainPrice}{" "}
                  </span>{" "}
                  ₹{all.AfterDiscount}, YOU GET :
                </Typography>

                <Box sx={{ mt: 4 }} variant="contained">
                  {
                    isAuth ? (
                      (all.AfterDiscount === 0) ? ("") : (
                        videoStatus ? (
                          <Button  onClick={handleclick}>
                          <img src={logo2} alt="enroll now" />
                        </Button>
                        ) : (
                          ""
                        )
                        
                        
                      )
                        
                    ) : (
                      <Auth
                          head={show === "sign" ? "Join Us!" : "Welcome Back!"}
                          subhead={show === "sign" ? "SIGN UP WITH" : "LOGIN WITH"}
                          bottomText1={show === "sign" ? "Are you already a member ?" : "Not a member yet ?"}
                          bottomText2={show === "sign" ? "LOG IN" : "SIGN UP"}
                          modalIsOpen = {modalIsOpen}
                          setModalIsOpen = {setModalIsOpen}
                          openModal = {openModal}
                          display={<img style = {{marginLeft : "-30px", marginTop : "-5px"}} src = {logo2} alt = "enroll now" />}
                          setStatus={setSign}
                          storedStatus={show}
                      ></Auth>
                    )
                  }
                  
                </Box>
                <Typography
                  variant="h1"
                  sx={{
                    paddingRight: 4,
                    lineHeight: "2",
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "white",
                    mt: "5px",
                  }}
                  component="div"
                >
                  <span style={{}}>
                    {" "}
                    <img src={right} />{" "}
                  </span>{" "}
                  Exclusive Video Lectures on {all.courseName}
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    paddingRight: 4,
                    lineHeight: "2",
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "white",
                    mt: "5px",
                  }}
                  component="div"
                >
                  <span style={{}}>
                    {" "}
                    <img src={right} />{" "}
                  </span>{" "}
                  Certificate of Completion signed by {all.authorName}
                </Typography>

                <Box sx={{ mt: 4 }} variant="contained">
                  <Button onClick={handleOpen}>
                    <img
                      style={{ width: "30px" }}
                      src={PlayButton}
                      alt="play button"
                    />
                    <span style={{ marginLeft: "10px", color: "white" }}>
                      PLAY TRAILER
                    </span>
                  </Button>
                </Box>
              </div>
            </Box>
          </Typography>

          {/* container Start */}

          <Container sx={{ mt: 8 }} maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
              <Paper  sx = {{borderRadius : 2}}>
                <Grid container md={12}>
                  {/* <Grid item xs={8}> */}

                  <Grid item md={8}>
                    <Paper  square>
                      <Stack direction="row">
                        <Box sx={{ p: 1 }}>
                          <Typography
                            variant="h1"
                            sx={{
                              paddingLeft: 4,
                              paddingTop: 2,
                              lineHeight: "2",
                              fontSize: "18px",
                              fontWeight: "600",
                              fontFamily: "Poppins, sans-serif",
                              color: "black",
                              mt: "5px",
                            }}
                            component="div"
                          >
                            LEARN
                          </Typography>
                        </Box>
                        <div style={{ width: "100%" }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              ml: 100,
                              p: 1,
                              m: 1,
                              color: "orange",
                            }}
                          >
                            <Box sx={{ p: 2, borderRight: 1 }}>
                              <img src={Favorite} alt="favorite" />
                            </Box>
                            <Box sx={{ p: 2 }}>
                              <img src={Certificate} alt="favorite" />
                            </Box>
                            <Box sx={{ p: 2 }}>
                              {
                                isAuth ? (
                                  <Link style = {{textDecoration : "none"}} to = {`/certificate/${all._id}`}>
                              <img src={DC} alt="favorite" />
                              </Link>
                                ) : (
                                  <Auth
                                  head={show === "sign" ? "Join Us!" : "Welcome Back!"}
                                  subhead={show === "sign" ? "SIGN UP WITH" : "LOGIN WITH"}
                                  bottomText1={show === "sign" ? "Are you already a member ?" : "Not a member yet ?"}
                                  bottomText2={show === "sign" ? "LOG IN" : "SIGN UP"}
                                  modalIsOpen = {modalIsOpen}
                                  setModalIsOpen = {setModalIsOpen}
                                  openModal = {openModal}
                                  display={<img src={DC} alt="favorite" />}
                                  setStatus={setSign}
                                  storedStatus={show}
                              ></Auth>
                                )
                              }
                            
                            </Box>
                            {/* <Item>Item 1</Item> */}
                            {/* <Item>Item 2</Item>
                    <Item>Item 3</Item> */}
                          </Box>
                        </div>
                      </Stack>

                      <hr />
                      <Stack direction="row">
                        <Box sx={{ p: 1 }}>
                          <Typography
                            variant="h1"
                            sx={{
                              paddingLeft: 4,
                              paddingTop: 2,
                              lineHeight: "2",
                              fontSize: "18px",
                              fontWeight: "700",
                              fontFamily: "Poppins, sans-serif",
                              color: "orange",
                              mt: "5px",
                            }}
                            component="div"
                          >
                            <Stack direction="row">
                              {all.totalVideo}
                              <span
                                style={{
                                  float: "left",
                                  marginLeft: "20px",
                                  color: "black",
                                }}
                              >
                                Videos
                              </span>
                            </Stack>

                            {/* </div> */}
                          </Typography>
                        </Box>
                        <div style={{ width: "100%" }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              ml: 100,
                              p: 1,
                              m: 1,
                              color: "orange",
                            }}
                          >
                            <Box sx={{ p: 2, color: "gray" }}>
                              <img src={pdf} alt="favorite" />
                            </Box>
                            <Box sx={{ p: 2, color: "gray" }}>
                              <img src={DB} alt="favorite" />
                            </Box>

                            {/* <Item>Item 1</Item> */}
                            {/* <Item>Item 2</Item>
                    <Item>Item 3</Item> */}
                          </Box>
                        </div>
                      </Stack>
                      <Stack direction="row">
                        <Box sx={{ pl: 2, ml: "20px", color: "gray" }}>
                          <img src={time} alt="favorite" />
                        </Box>
                        <Typography
                          variant="h1"
                          sx={{
                            paddingLeft: 2,

                            lineHeight: "1",
                            fontSize: "17px",
                            fontWeight: "500",
                            fontFamily: "Poppins, sans-serif",
                            color: "gray",
                          }}
                          component="div"
                        >
                          {all.totalCourseTime}
                        </Typography>
                      </Stack>

                      {/* Showing videos in this box */}

                      <Box sx={{ p: 5 }}>
                        {allVideo.map((e) => (





                          // {
                            isAuth ? ( 
                              videoStatus ? (
                                
                          <div
                          onClick={handleclick}
                          disabled
                            key={e._id}
                            style={{
                              backgroundColor: "#F7F7F7",
                              padding: "5px",
                              marginBottom: "30px",
                            }}
                          >
                            <Grid container md={12}>
                              <Grid item md={3}>
                                <div
                                  style={{
                                    opacity: "0.6",
                                    backgroundImage: `url(${e.image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "200px 120px",width: "200px", height: "120px"
                                  }}
                                >
                                  <img
                                    style={{ width: "50px", height: "50px", marginLeft : "75px", marginTop : "35px" }}
                                    src={lock}
                                    alt="image"
                                  />
                                </div>
                              </Grid>
                              <Grid item md={9}>
                                <Box sx={{ p: 1 }}>
                                  <Typography
                                    variant="h1"
                                    sx={{
                                      paddingLeft: 2,
                                      paddingTop: 2,

                                      fontSize: "18px",
                                      fontWeight: "700",
                                      fontFamily: "Poppins, sans-serif",
                                      color: "black",
                                      mt: "5px",
                                    }}
                                    component="div"
                                  >
                                    {e.title}
                                  </Typography>
                                  <Typography
                                    variant="h1"
                                    sx={{
                                      paddingLeft: 2,
                                      paddingTop: 2,

                                      fontSize: "17px",
                                      fontWeight: "500",
                                      fontFamily: "Poppins, sans-serif",
                                      color: "gray",
                                      mt: "5px",
                                    }}
                                    component="div"
                                  >
                                    {e.description}
                                  </Typography>
                                  <div style={{ marginTop: "20px" }}>
                                    <Stack direction="row">
                                      <Box
                                        sx={{
                                          pl: 2,
                                          ml: "20px",
                                          color: "gray",
                                        }}
                                      >
                                        <img src={time} alt="favorite" />
                                      </Box>
                                      <Typography
                                        variant="h1"
                                        sx={{
                                          paddingLeft: 2,

                                          lineHeight: "1",
                                          fontSize: "17px",
                                          fontWeight: "500",
                                          fontFamily: "Poppins, sans-serif",
                                          color: "gray",
                                        }}
                                        component="div"
                                      >
                                        {e.duration}
                                      </Typography>
                                    </Stack>
                                  </div>
                                </Box>
                              </Grid>
                            </Grid>
                          </div>
                          
                              ) : (
                                <Link style = {{textDecoration : "none"}} to = {`/playvideo/${e._id}/${all._id}`}>
                          <div
                            key={e._id}
                            style={{
                              backgroundColor: "#F7F7F7",
                              padding: "5px",
                              marginBottom: "30px",
                            }}
                          >
                            <Grid container md={12}>
                              <Grid item md={3}>
                                <div
                                  style={{
                                    backgroundImage: `url(${e.image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "200px 120px",width: "200px", height: "120px"
                                  }}
                                >
                                  {/* <img
                                    style={{ width: "200px", height: "150px" }}
                                    src={e.image}
                                    alt="image"
                                  /> */}
                                </div>
                              </Grid>
                              <Grid item md={9}>
                                <Box sx={{ p: 1 }}>
                                  <Typography
                                    variant="h1"
                                    sx={{
                                      paddingLeft: 2,
                                      paddingTop: 2,

                                      fontSize: "18px",
                                      fontWeight: "700",
                                      fontFamily: "Poppins, sans-serif",
                                      color: "black",
                                      mt: "5px",
                                    }}
                                    component="div"
                                  >
                                    {e.title}
                                  </Typography>
                                  <Typography
                                    variant="h1"
                                    sx={{
                                      paddingLeft: 2,
                                      paddingTop: 2,

                                      fontSize: "17px",
                                      fontWeight: "500",
                                      fontFamily: "Poppins, sans-serif",
                                      color: "gray",
                                      mt: "5px",
                                    }}
                                    component="div"
                                  >
                                    {e.description}
                                  </Typography>
                                  <div style={{ marginTop: "20px" }}>
                                    <Stack direction="row">
                                      <Box
                                        sx={{
                                          pl: 2,
                                          ml: "20px",
                                          color: "gray",
                                        }}
                                      >
                                        <img src={time} alt="favorite" />
                                      </Box>
                                      <Typography
                                        variant="h1"
                                        sx={{
                                          paddingLeft: 2,

                                          lineHeight: "1",
                                          fontSize: "17px",
                                          fontWeight: "500",
                                          fontFamily: "Poppins, sans-serif",
                                          color: "gray",
                                        }}
                                        component="div"
                                      >
                                        {e.duration}
                                      </Typography>
                                    </Stack>
                                  </div>
                                </Box>
                              </Grid>
                            </Grid>
                          </div>
                          </Link>
                              )
                              
                            ) : (
                              <Auth
                                  head={show === "sign" ? "Join Us!" : "Welcome Back!"}
                                  subhead={show === "sign" ? "SIGN UP WITH" : "LOGIN WITH"}
                                  bottomText1={show === "sign" ? "Are you already a member ?" : "Not a member yet ?"}
                                  bottomText2={show === "sign" ? "LOG IN" : "SIGN UP"}
                                  modalIsOpen = {modalIsOpen}
                                  setModalIsOpen = {setModalIsOpen}
                                  openModal = {openModal}
                                  display={<div
                                    key={e._id}
                                    style={{
                                      backgroundColor: "#F7F7F7",
                                      padding: "5px",
                                      marginBottom: "30px",
                                    }}
                                  >
                                    <Grid container md={12}>
                                      <Grid item md={3}>
                                        <div
                                          style={{
                                            backgroundImage: `url(${e.image})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "200px 120px",width: "200px", height: "120px"
                                          }}
                                        >
                                          {/* <img
                                            style={{ width: "200px", height: "150px" }}
                                            src={e.image}
                                            alt="image"
                                          /> */}
                                        </div>
                                      </Grid>
                                      <Grid item md={9}>
                                        <Box sx={{ p: 1 }}>
                                          <Typography
                                            variant="h1"
                                            sx={{
                                              paddingLeft: 2,
                                              paddingTop: 2,
        
                                              fontSize: "18px",
                                              fontWeight: "700",
                                              fontFamily: "Poppins, sans-serif",
                                              color: "black",
                                              mt: "5px",
                                            }}
                                            component="div"
                                          >
                                            {e.title}
                                          </Typography>
                                          <Typography
                                            variant="h1"
                                            sx={{
                                              paddingLeft: 2,
                                              paddingTop: 2,
        
                                              fontSize: "17px",
                                              fontWeight: "500",
                                              fontFamily: "Poppins, sans-serif",
                                              color: "gray",
                                              mt: "5px",
                                            }}
                                            component="div"
                                          >
                                            {e.description}
                                          </Typography>
                                          <div style={{ marginTop: "20px" }}>
                                            <Stack direction="row">
                                              <Box
                                                sx={{
                                                  pl: 2,
                                                  ml: "20px",
                                                  color: "gray",
                                                }}
                                              >
                                                <img src={time} alt="favorite" />
                                              </Box>
                                              <Typography
                                                variant="h1"
                                                sx={{
                                                  paddingLeft: 2,
        
                                                  lineHeight: "1",
                                                  fontSize: "17px",
                                                  fontWeight: "500",
                                                  fontFamily: "Poppins, sans-serif",
                                                  color: "gray",
                                                }}
                                                component="div"
                                              >
                                                {e.duration}
                                              </Typography>
                                            </Stack>
                                          </div>
                                        </Box>
                                      </Grid>
                                    </Grid>
                                  </div>}
                                  setStatus={setSign}
                                  storedStatus={show}
                              ></Auth>
                            )
                          // }
                          // <Link style = {{textDecoration : "none"}} to = {`/playvideo/${e._id}/${all._id}`}>
                          // <div
                          //   key={e._id}
                          //   style={{
                          //     backgroundColor: "#F7F7F7",
                          //     padding: "5px",
                          //     marginBottom: "30px",
                          //   }}
                          // >
                          //   <Grid container md={12}>
                          //     <Grid item md={3}>
                          //       <div
                          //         style={{
                          //           backgroundImage: `url(${e.image})`,
                          //           backgroundRepeat: "no-repeat",
                          //           backgroundSize: "200px 120px",width: "200px", height: "120px"
                          //         }}
                          //       >
                          //         {/* <img
                          //           style={{ width: "200px", height: "150px" }}
                          //           src={e.image}
                          //           alt="image"
                          //         /> */}
                          //       </div>
                          //     </Grid>
                          //     <Grid item md={9}>
                          //       <Box sx={{ p: 1 }}>
                          //         <Typography
                          //           variant="h1"
                          //           sx={{
                          //             paddingLeft: 2,
                          //             paddingTop: 2,

                          //             fontSize: "18px",
                          //             fontWeight: "700",
                          //             fontFamily: "Poppins, sans-serif",
                          //             color: "black",
                          //             mt: "5px",
                          //           }}
                          //           component="div"
                          //         >
                          //           {e.title}
                          //         </Typography>
                          //         <Typography
                          //           variant="h1"
                          //           sx={{
                          //             paddingLeft: 2,
                          //             paddingTop: 2,

                          //             fontSize: "17px",
                          //             fontWeight: "500",
                          //             fontFamily: "Poppins, sans-serif",
                          //             color: "gray",
                          //             mt: "5px",
                          //           }}
                          //           component="div"
                          //         >
                          //           {e.description}
                          //         </Typography>
                          //         <div style={{ marginTop: "20px" }}>
                          //           <Stack direction="row">
                          //             <Box
                          //               sx={{
                          //                 pl: 2,
                          //                 ml: "20px",
                          //                 color: "gray",
                          //               }}
                          //             >
                          //               <img src={time} alt="favorite" />
                          //             </Box>
                          //             <Typography
                          //               variant="h1"
                          //               sx={{
                          //                 paddingLeft: 2,

                          //                 lineHeight: "1",
                          //                 fontSize: "17px",
                          //                 fontWeight: "500",
                          //                 fontFamily: "Poppins, sans-serif",
                          //                 color: "gray",
                          //               }}
                          //               component="div"
                          //             >
                          //               {e.duration}
                          //             </Typography>
                          //           </Stack>
                          //         </div>
                          //       </Box>
                          //     </Grid>
                          //   </Grid>
                          // </div>
                          // </Link>
                        ))}
                      </Box>

                      {/* End show videos */}
                    </Paper>
                  </Grid>
                  <Grid item md={4}>
                    <Paper square sx={{ p: 5, bgcolor: "#F7F7F7" }}>
                      <Stack direction="row" spacing={2}>
                        <Avatar
                          alt="Remy Sharp"
                          sx={{ width: 100, height: 100 }}
                          src={all.sampleImage}
                        />
                        <Box>
                          <Typography
                            variant="h1"
                            sx={{
                              paddingRight: 4,
                              lineHeight: "2",
                              fontSize: "22px",
                              fontWeight: "600",
                              fontFamily: "Poppins, sans-serif",
                              color: "black",
                              mt: "5px",
                            }}
                            component="div"
                          >
                            {all.authorName}
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              paddingRight: 4,
                              lineHeight: "2",
                              fontSize: "18px",
                              fontWeight: "200",
                              fontFamily: "Poppins, sans-serif",
                              color: "gray",
                            }}
                            component="div"
                          >
                            {all.authorDetails}
                          </Typography>
                          <Stack direction="row" spacing={2}>
                            <Button variant="outlined">FOLLOW</Button>
                            <Typography
                              variant="p"
                              sx={{
                                paddingRight: 4,
                                lineHeight: "2",
                                fontSize: "16px",
                                fontWeight: "200",
                                fontFamily: "Poppins, sans-serif",
                                color: "#0099ff",
                              }}
                              component="div"
                            >
                              {all.followers}{" "}
                              <span style={{ color: "gray" }}>FOLLOWING</span>
                            </Typography>
                          </Stack>
                        </Box>
                      </Stack>
                      <br />
                      <br />
                      <hr />

                      <Typography
                        variant="h1"
                        sx={{
                          paddingRight: 4,
                          lineHeight: "2",
                          fontSize: "22px",
                          fontWeight: "600",
                          fontFamily: "Poppins, sans-serif",
                          color: "black",
                          mt: "5px",
                        }}
                        component="div"
                      >
                        {all.totalVideo}
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          paddingRight: 4,
                          lineHeight: "2",
                          fontSize: "16px",
                          fontWeight: "200",
                          fontFamily: "Poppins, sans-serif",
                          color: "gray",
                        }}
                        component="div"
                      >
                        LESSONS
                      </Typography>
                      <br />
                      <hr />

                      <Typography
                        variant="h1"
                        sx={{
                          paddingRight: 4,
                          lineHeight: "2",
                          fontSize: "17px",
                          fontWeight: "600",
                          fontFamily: "Poppins, sans-serif",
                          color: "#999999",
                          mt: "5px",
                        }}
                        component="div"
                      >
                        ABOUT
                      </Typography>
                      <br />

                      {authorAbouta.map((e, i) => (
                        <Typography
                          variant="p"
                          key={i}
                          sx={{
                            paddingRight: 4,
                            lineHeight: "2",
                            fontSize: "16px",
                            fontWeight: "300",
                            fontFamily: "Roboto Condensed",
                            color: "#64666B",
                            mt: "5px",
                          }}
                          component="div"
                        >
                          {e}
                          <br />
                        </Typography>
                      ))}
                    </Paper>
                  </Grid>

                  {/* </Grid> */}
                </Grid>
              </Paper>
            </Box>
          </Container>

          {/* container End */}

          <Container >
            <Box sx = {{p: 2, mt : 8}}>
              <img src = {whatnew} alt = "whats new" />
            </Box>
          </Container>
        </div>
      </Box>
    </>
  );
};

export { SingleTopicMainPage };

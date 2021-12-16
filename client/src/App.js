import { Footer } from './Components/Shared_Components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { Home_Component } from './Components/Pages/Home_Page_Component';
import { Offercart } from './Components/Pages/Offercardpopup';

import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { authSuccess, authFailure } from "./Store/Auth/actions";
import Routes from './Routes/Routes';


function App() {

  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((store) => store.auth)

  const fetchUser = () => {
    axios
      .get("http://localhost:2345/profile", { withCredentials: true })
      .then(res => {
        // console.log("data", res.data)
        localStorage.setItem('data', JSON.stringify(res.data));
        dispatch(authSuccess(res.data))
        setName(res.data.user.name)
      })
      .catch(err => {
        console.log("Not properly authenticated!");
        console.log("Error", err);
        dispatch(authFailure(err))
      })
  }


  useEffect(() => {
    if (localStorage.getItem("loginMethod") === "Fastlogin") {
      fetchUser()
    }
  }, [])

  return (
    <div className="App">
<<<<<<< HEAD
        <Auth 
        head="Welcome Back!"
        subhead="LOGIN WITH"
        bottomText1="Not a member yet ?"
        bottomText2="SIGN UP"
        ></Auth>
        <Auth 
        head="Join Us!"
        subhead="SIGN UP WITH"
        bottomText1="Are you already a member ?"
        bottomText2="LOG IN"
        ></Auth>
        <Footer></Footer>
     
     
=======
      <Routes></Routes>


>>>>>>> 220ebadd63609e2b057cdef4a08e69af340e4a47
    </div>
  );
}

export default App;

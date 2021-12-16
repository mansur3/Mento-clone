import React, { useState } from 'react'
import "./Navbar.css";
import Auth from '../../Pages/Auth/Auth';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const { isAuth, user } = useSelector((store) => store.auth);
    const [show, setShow] = useState("login")

    const setSign = (e) => {
        setShow(e);
    }

    return (
        <div className='main-navbar'>
            <div style = {{zIndex : 1}}>
                <img src="./images/navbarlogo.png" alt="" />
                <img src="./images/navbarmento.png" alt="" />
            </div>
            <div>
                <img src="./images/searchlogo.png" alt="" />
                <input type="text" placeholder='Topic name, Influencers name' />
            </div>
            <div>ALL TOPICS</div>
            <div>ABOUT</div>
            {isAuth ? <button className="loggedin-button">{user.user.name[0].toUpperCase()}</button> : <Auth
                head={show === "sign" ? "Join Us!" : "Welcome Back!"}
                subhead={show === "sign" ? "SIGN UP WITH" : "LOGIN WITH"}
                bottomText1={show === "sign" ? "Are you already a member ?" : "Not a member yet ?"}
                bottomText2={show === "sign" ? "LOG IN" : "SIGN UP"}
                display="LOGIN"
                setStatus={setSign}
                storedStatus={show}
            ></Auth>}
        </div>
    )
}

export default Navbar

import React, { useState } from 'react'
import "./Navbar.css";
import Auth from '../../Pages/Auth/Auth';
import { useSelector } from 'react-redux';
import Logout from '../../Pages/Auth/Logout';
import {Redirect} from "react-router-dom"


const Navbar = () => {

    const { isAuth, user } = useSelector((store) => store.auth);
    const [show, setShow] = useState("login")

    const setSign = (e) => {
        setShow(e);
    }
    // console.log(user);

    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    return (
        <div className='main-navbar'>
            <div onClick={() => {window.location.href = "http://localhost:3000"}}>
                    <img key="nav-i1" src="https://www.mento.co.in/assets/logo-e65920660caecc5be1d6b1757278bcb5745b83cfbf08d0dcdc5cd30bead06334.svg" alt="" />
            </div>
            <div>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fwhite-search-icon-png-33.png&f=1&nofb=1" alt="" />
                <input type="text" placeholder='Topic name, Influencers name' />
            </div>
            <div>ALL TOPICS</div>
            <div>ABOUT</div>
            {isAuth ? (<Logout userData={user.user.name[0].toUpperCase()}></Logout>) : (<Auth
                head={show === "sign" ? "Join Us!" : "Welcome Back!"}
                subhead={show === "sign" ? "SIGN UP WITH" : "LOGIN WITH"}
                bottomText1={show === "sign" ? "Are you already a member ?" : "Not a member yet ?"}
                bottomText2={show === "sign" ? "LOG IN" : "SIGN UP"}
                display={<button className="btn-login">LOGIN</button>}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                openModal={openModal}
                setStatus={setSign}
                storedStatus={show}
            ></Auth>)}
        </div>
    )
}

export default Navbar

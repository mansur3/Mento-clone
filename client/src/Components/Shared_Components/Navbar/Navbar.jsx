import React from 'react'
import "./Navbar.css";
import Auth from '../../Pages/Auth/Auth';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const { isAuth, user } = useSelector((store) => store.auth);

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
            {/* <button>LOGIN</button> */}
            {isAuth ? <button className="loggedin-button">{user.user.name[0].toUpperCase()}</button> : <Auth
                head="Welcome Back!"
                subhead="LOGIN WITH"
                bottomText1="Not a member yet ?"
                bottomText2="SIGN UP"
                display="LOGIN"
            ></Auth>}
        </div>
    )
}

export default Navbar

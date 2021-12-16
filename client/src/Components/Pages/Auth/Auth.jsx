import React, { useEffect } from 'react';
import Modal from 'react-modal';
import "./Auth.css";
import { Link } from "react-router-dom";
import axios from "axios";

const customStyles = {
    content: {
        // top: '50%',
        // left: '50%',
        // right: 'auto',
        // bottom: 'auto',
        // marginRight: '-50%',
        // transform: 'translate(-50%, -50%)',
        // padding: "0",
        maxWidth: "844px",
        padding: "0px",
        maxHeight: "449px",
        overflow: "hidden",
        margin: "auto",
        display: "flex"

    },
};

const Auth = ({ head, subhead, bottomText1, bottomText2, display }) => {

    // useEffect(() => {
    //     localStorage.clear();
    // }, [])

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    function closeModal() {
        setIsOpen(false);
    }

    const googleAuth = () => {
        // window.location.href = "http://localhost:2345/auth/google"
        // const {data} = await axios.redirect("http://localhost:2345/auth/google")
        // console.log(data)
        localStorage.setItem("loginMethod", "Fastlogin")
        // console.log("pankaj")
        // window.open('http://localhost:2345/auth/google','_self');
        window.location.href = "http://localhost:2345/auth/google"
    }


    // const findHeader = async () => {
    //     try {
    //         const data = await axios.get("http://localhost:3000/");
    //         if (data) console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // console.log(this)
    // findHeader();

    return (
        <>
            <button className='btn-login' onClick={openModal}>{display}</button>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className='left-main'>
                    <div>NITESH TIWARI</div>
                    <div>NITESH TIWARI ABOUT A CAREER IN FILM-MAKING</div>
                    <div></div>
                    <div>FILM-MAKING 101</div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {/* <button onClick={closeModal}>close</button> */}
                <div className='right-main'>
                    <div><button onClick={closeModal}>X</button></div>
                    <div>{head}</div>
                    <div>{subhead}</div>
                    <div>
                        {/* <Link style={{ textDecoration: "none" }}><button className='fb-button'><img src="./images/facebook.png" /><span>FACEBOOK</span></button></Link> */}
                        <button className='fb-button'><img src="./images/facebook.png" /><span>FACEBOOK</span></button>
                        <button onClick={() => googleAuth()} className='g-button'><img src="./images/google.png" /><span>GOOGLE+</span></button>
                        {/* <Link style={{ textDecoration: "none" }}><button className='g-button'><img src="./images/google.png" /><span>GOOGLE+</span></button></Link> */}
                    </div>
                    <div><span>{bottomText1}</span><span><Link style={{ textDecoration: "none", color: "black" }} to="/signup">{bottomText2}</Link></span></div>
                </div>
            </Modal>
        </>
    )
}

export default Auth

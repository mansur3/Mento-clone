import React from 'react';
import Modal from 'react-modal';
import "./Auth.css";

const customStyles = {
    content: {
        maxWidth: "844px",
        padding: "0px",
        maxHeight: "449px",
        overflow: "hidden",
        margin: "auto",
        display: "flex"

    },
    overlay:{
        background : "rgba(0, 0, 0, 0.6)"
    }
};

const Auth = ({ head, subhead, bottomText1, bottomText2, display, setStatus, storedStatus, modalIsOpen, setModalIsOpen, openModal }) => {

    let subtitle;
    // const [modalIsOpen, setModalIsOpen] = React.useState(false);

    // function openModal() {
    //     setModalIsOpen(true);
    // }

    function closeModal() {
        setModalIsOpen(false);
        setStatus("login");
    }

    const googleAuth = () => {
        localStorage.setItem("loginMethod", "Fastlogin")
        window.location.href = "http://localhost:2345/auth/google"
    }

    const showSign = () => {
        if (storedStatus === "sign") {
            setStatus("login");
        } else {
            setStatus("sign");
        }
        
    }

    return (
        <>
            <div style = {{cursor : "pointer"}} onClick={openModal}>{display}</div>
            <Modal
                isOpen={modalIsOpen}
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
                <div className='right-main'>
                    <div><button onClick={closeModal}>X</button></div>
                    <div>{head}</div>
                    <div>{subhead}</div>
                    <div>
                        <button className='fb-button'><img src="./images/facebook.png" /><span>FACEBOOK</span></button>
                        <button onClick={() => googleAuth()} className='g-button'><img src="./images/google.png" /><span>GOOGLE+</span></button>
                    </div>
                    <div><span>{bottomText1}</span><span onClick={showSign} className='onhover'>{bottomText2}</span></div>
                </div>
            </Modal>
        </>
    )
}

export default Auth

import React from 'react';
import Modal from 'react-modal';
import "./Logout.css";
import { useSelector, useDispatch } from 'react-redux';
import { authFailure, authSuccess } from '../../../Store/Auth/actions';
import {useState, useEffect} from "react";
import axios from "axios";

const customStyles = {
    content: {
        top: '15%',
        left: '80%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: "0 !important",
    },
};

const Logout = () => {

    const { isAuth, user } = useSelector((store) => store.auth);
    const [name, setName] = useState("");

    const dispatch = useDispatch();
    const fetchUser = () => {
        axios
          .get("http://localhost:2345/profile", { withCredentials: true })
          .then(res => {
            console.log("data", res.data)
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
        if(isAuth) {
            if(user == null) {
                // setName(user.user.name[0].toUpperCase());
                fetchUser();
            }
            console.log(user);
            
        } else {
            setName("Login")
        }
    }, [])

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const logoutUser = () => {
        localStorage.clear();
        dispatch(authFailure(null));
        if (window.location.href !== "http://localhost:3000") window.location.href = "http://localhost:3000";
    }

    return (
        <div>
            <button className='logout-button' onClick={openModal}>{name}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className='inside-logout-button'>
                    <div>My Profile</div>
                    <hr />
                    <div onClick={logoutUser}>Log Out</div>
                </div>
            </Modal>
        </div>
    )
}

export default Logout

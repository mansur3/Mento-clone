import React from 'react';
import Modal from 'react-modal';
import "./Logout.css";
import { useSelector, useDispatch } from 'react-redux';
import { authFailure } from '../../../Store/Auth/actions';

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

const Logout = ({ userData }) => {

    const { isAuth, user } = useSelector((store) => store.auth);

    const dispatch = useDispatch();

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
            <button className='logout-button' onClick={openModal}>{userData}</button>
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

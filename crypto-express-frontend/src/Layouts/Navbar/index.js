import React, {useState} from "react";
import {
    Bar, 
    Navbar, 
    NavBtn,
    NavBtnLink,
    NavLink,
    NavMenu 
} from "./NavbarElements"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../../Components/LoginModal.js';

const index = (props) => {
    const [showLogin, setShowLogin] = useState(false);

    const openLoginModal = () => {
        setShowLogin(true);
    }

    const closeLoginModal = () => { 
        setShowLogin(false);
    }



    return (
        <>
            <Navbar>
                <NavLink to='/'>
                    CRYPTO EXPRESS
                </NavLink>
                <Bar><FontAwesomeIcon icon={faBars}/></Bar>
                <NavMenu>
                    <NavLink to='/about'>
                        Roadmap
                    </NavLink>
                    <NavLink to='/services'>
                        Whitepaper
                    </NavLink>
                    <NavLink to='/contact-us'>
                        Community
                    </NavLink>
                    <NavLink to='/contact-us'>
                        Teams
                    </NavLink>

                    <NavBtn>
                        <NavBtnLink onClick={openLoginModal}>Login</NavBtnLink>
                    </NavBtn>
                </NavMenu>
                <LoginModal show={showLogin} handleClose={closeLoginModal}/>

                
            </Navbar>
            
        </>

    )
}


export default index;
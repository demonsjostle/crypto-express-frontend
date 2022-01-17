import React from "react";
import {LogoContainer,
        LogoText,
        Nav, 
        Navbar,
        NavItem,
        NavItemContainer,
        LoginBtn,
        RegisterBtn} 
from "./NavbarElements";

const index = (props) => {

    const Link = () => {

    } 
    return (
        <>
            <Navbar scrollNav={props.scrollNav}>
                <Nav>
                    <LogoContainer>
                        <LogoText>CRYPTO EXPRESS</LogoText>
                    </LogoContainer>
                    <NavItemContainer>
                        <NavItem href="/roadmap">Roadmap</NavItem>
                        <NavItem href="/whitepaper">White paper</NavItem>
                        <NavItem>Community</NavItem>
                        <NavItem>Team</NavItem>
                        <NavItem><RegisterBtn>Register</RegisterBtn></NavItem>
                        <NavItem><LoginBtn>Login</LoginBtn></NavItem>
                    </NavItemContainer> 
                </Nav>
            </Navbar>
             
        </>

    )
}


export default index;
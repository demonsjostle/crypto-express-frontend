import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { device } from "../../Assets/GlobalStyles";



    

export const Navbar = styled.nav`
    width: 100vw;
    height: var(--nav-size);
    background: #1e1e26;
    display: flex;
    justify-content: space-between;
    /* padding: 0.5rem calc((100vw - 1000px) / 2); */

`;


export const NavLink = styled(Link)`
    color: #15cdfc;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.5rem;
    height: 100%;
    cursor: pointer;

`;


export const Bar = styled.div`
    display: none;
    @media ${device.mobileL} {
        display: flex;
        color: #fff;
        align-items: center;
        margin-right: 20px;
        font-size: 25px;
        cursor: pointer;
    }

`;


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media ${device.mobileL} {
        display: none;
    }

`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    /* Third Nav */
    /* justify-content: flex-end;
    width: 100vw; */
    @media ${device.mobileL} {

    }


`;


export const NavBtnLink = styled.div`

    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const NavLogo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;

`;

export const NavLogoText = styled.span`
    font-weight: 600;

`;
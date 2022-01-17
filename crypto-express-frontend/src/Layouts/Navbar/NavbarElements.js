import styled from "styled-components";

export const Navbar = styled.nav`
    border-bottom: ${({scrollNav}) => (scrollNav ? null : null)}; ;
    height: var(--nav-size);
    display: flex;
    justify-content: center;
    background-color: ${({scrollNav}) => (scrollNav ? 'rgba(93, 206, 178, 0.5)' : 'transparent' )};
    backdrop-filter: ${({scrollNav}) => (scrollNav ? 'blur(10px)' : null)};
    position: ${({scrollNav}) => (scrollNav ? 'fixed' : 'relative')};
    width: 100%;
    
`;


export const Nav = styled.ul`
    width: 1500px;  
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    
    
`;


export const LogoContainer = styled.li`
    
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const LogoText = styled.span``;

export const NavItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
`;

export const NavItem = styled.a`
    color: #000;
    text-decoration: none;
    margin-left: 15px;
    cursor: pointer;
    
`;

export const LoginBtn = styled.div`
    background-color: #18AEF4;
    width: 70px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 28px; 

`;

export const RegisterBtn = styled.div`
    background-color: #18AEF4;
    width: 70px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 28px; 

`;
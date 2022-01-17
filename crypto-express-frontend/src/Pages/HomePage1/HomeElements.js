import styled from "styled-components";
import background from "../../Assets/Images/BG_play.jpg"

export const HomeBody = styled.div`
    
`;


export const FirstContainer = styled.div` 
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    margin-top: ${({scrollNav}) => (scrollNav ? null : 'calc(var(--nav-size) * -1)')}; 

`;


export const PlayButton = styled.div`
    border: 1px solid gray;
    border-radius: 28px;
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center; 
    cursor: pointer;
    background-color: #F2C660;
`;


export const SecondContainer = styled.div`
    width: 100%;
    height: 100vh;
    
`;
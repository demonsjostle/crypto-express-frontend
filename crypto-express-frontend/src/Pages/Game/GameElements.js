import styled from "styled-components";
import cursor from "../../Assets/cursor.png"

export const Wrapper = styled.div`
    cursor: url(${cursor}), default;
    /* position: relative; */
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;    
     
    
    
`;

export const DestinationBoard = styled.div`
    width: 500px;
    height: 300px;
    color: black;
    z-index: 999;
    background-color: #fff;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

`;


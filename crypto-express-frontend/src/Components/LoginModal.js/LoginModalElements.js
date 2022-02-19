import styled from 'styled-components';
import { device } from '../../Assets/GlobalStyles';


export const ModalBody = styled.div`
    position: absolute;
    display: ${({ show }) => (show ? "flex" : "none")};
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    width: calc(100vw / 2);
    height: calc(100vh / 2);
    background-color: #1e1e26;
    border-radius: 20px;
    position: relative;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const CloseButton = styled.div`
    position: absolute;
    color: #A6A4A4;
    font-size: 40px;
    font-weight: 700;
    right: -1rem;
    top: -2rem;
    cursor: pointer;
    z-index: 10;
    :hover {
        color: #fff;
    }

`;

export const TitleText = styled.div`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const SocialList = styled.div`
    /* border: 1px solid red; */
`;

export const SocialItem = styled.div`
    width: 120px;
    padding: 10px;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    margin-bottom: 10px;
    /* border: 1px solid red; */
    background-color: #3E3E3F;
    border-radius: 10px;
`;

export const SocialImage = styled.img`
    width: 20px;
    height: 20px;

`;


export const SocialText = styled.p`
    margin-left: 10px;
`;
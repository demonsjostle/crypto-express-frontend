import styled from "styled-components";
import { device } from "../../../Assets/GlobalStyles";

export const TokenElem = styled.div`
  @media ${device.laptop} {
    flex-direction: column;
  }

  width: 100vw;
  height: auto;
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Circle = styled.div`
  @media ${device.mobileL} {
    width: 250px;
    height: 250px;
  }
  @media ${device.laptop} {
    margin: 0 0 2rem 0;
  }

  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #ccc;
`;

export const Rectangle = styled.div`
  @media ${device.mobileL} {
    width: 250px;
    height: 250px;
  }

  width: 300px;
  height: 300px;
  background-color: #ccc;
`;

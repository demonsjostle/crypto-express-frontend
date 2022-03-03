import styled from "styled-components";
import background from "../../../Assets/robot.gif";
import { device } from "../../../Assets/GlobalStyles";

export const ContentElem = styled.div`
  @media ${device.laptop} {
    flex-direction: column;
  }
  width: 100vw;
  height: auto;
  padding: 2rem 0.5rem;
  margin: 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Context = styled.div`
  @media ${device.mobileL} {
    width: 90%;
    margin-bottom: 3rem;
  }
  @media ${device.laptop} {
    width: 80%;
    margin-bottom: 3rem;
  }
  width: 45%;
  height: auto;
  font-size: 1.3rem;
  font-weight: normal;
  color: black;
  display: flex;
  justify-content: center;
`;

export const ImageContext = styled.img.attrs({
  src: `${background}`,
})`
@media ${device.mobileL} {
  width: 270px;
  height: 270px;
  }
  width: 350px;
  height: 350px;
`;

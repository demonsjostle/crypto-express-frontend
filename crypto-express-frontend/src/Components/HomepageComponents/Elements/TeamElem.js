import styled from "styled-components";
import { device } from "../../../Assets/GlobalStyles";

export const TeamElem = styled.div`
  @media ${device.tablet} {
    flex-direction: column;
  }

  width: 100vw;
  height: auto;
  margin: 2rem 0;
  padding: 1rem 0;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderImg = styled.img.attrs({
  src: "https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-location-icon-png-image_3989706.jpg",
})`
  @media ${device.tablet} {
    margin-bottom: 1rem;
    width: 230px;
    height: 230px;
  }
  width: 170px;
  height: 170px;
  border: 1px solid blue;
`;

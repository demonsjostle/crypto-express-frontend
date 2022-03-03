import styled from "styled-components";
import { device } from "../../../Assets/GlobalStyles";

export const CharacterElem = styled.div`
  @media ${device.laptop} {
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

  background-color: #eee;
`;


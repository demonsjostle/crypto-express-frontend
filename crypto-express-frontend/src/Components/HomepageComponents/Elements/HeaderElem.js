import styled from "styled-components";
import background from "../../../Assets/Images/BG_play.jpg";

export const Header = styled.div`
  width: 100vw;
  height: calc(69vh - var(--nav-size));
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

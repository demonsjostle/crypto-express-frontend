import styled from "styled-components";

export const Button = styled.div`
background: linear-gradient(
      20deg,
      hsl(210, 60%, 65%),
      hsl(300, 64%, 60%)
   );
   margin: 10px;
   padding: 17px 60px;
   text-align: center;
   text-transform: uppercase;
   transition: 0.5s;
   background-size: 200% auto;
   color: white;
   font-size: 1.8rem;   
   font-weight: bold;         
   box-shadow: 0 0 20px #eee;
   border-radius: 10px;
   display: block;
   cursor: pointer;
   letter-spacing: 2px;
   position: relative;
   bottom: 0;

   &:hover {
      background-position: right center; /* change the direction of the change here */
      letter-spacing: 7px;
      text-decoration: none;
   }
`;

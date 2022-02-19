import styled from "styled-components";



export const BodyContainer = styled.div`
    width: 100vw;
    height: calc(100vh - var(--nav-size));
    position: relative;
`;

export const Body = styled.div`
    width: calc(100vw - var(--sidebar-size));
    height: 100%;
    position: absolute;
    right: 0;
`;
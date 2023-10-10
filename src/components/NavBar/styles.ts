import styled, { keyframes } from "styled-components";
import { Button } from "@mui/material";

const animation = keyframes`

    0% {
        transform: translateY(-120%);
    }
    100% {
        transform: translateX(0);
    }
`;

export const BoxNavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 1.2rem 18rem;
    background: #032541;
    color: #fffff3;

    animation: ${animation} 1.2s ease-in-out;

    @media (max-width: 900px) {
        padding: 1.2rem 1rem;
    }
`;

export const BoxMenu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    align-items: center;

    animation: ${animation} 1.2s ease-in-out;
`;

export const StyleButton = styled(Button)`
    color: #fffff3;
`;

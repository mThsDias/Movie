import styled from "styled-components";
import { Button } from "@mui/material";

export const BoxNavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 1.2rem 18rem;
    background: #032541;
    color: #fffff3;
`;

export const BoxMenu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    align-items: center;
`;

export const StyleButton = styled(Button)`
    color: #fffff3;
`;

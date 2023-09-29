import styled from "styled-components";

export const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 300px;

    margin: 0 auto;
`;

export const ContentMovie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    margin-right: 20px;
`;

export const ContainerMovie = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 20px;
    white-space: nowrap;
    padding: 50px 20px;
    background: #fff;
`;

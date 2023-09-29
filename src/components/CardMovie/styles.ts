import styled from "styled-components";

// Styles in ImageComponent
export const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 300px;
    margin: 0 auto;
`;

// Styles in SectionMovie
export const CustomBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    overflow-x: auto;

    width: 100%;
    height: auto;

    margin: 0 auto;
    margin-bottom: 20px;

    white-space: nowrap;
    background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
    background-color: #f5f5f5;
    border-radius: 0.5rem;

    /* Estilização da barra de rolagem */
    &::-webkit-scrollbar {
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }

    &::-webkit-scrollbar-track {
        background-color: #ddd;
        border-radius: 4px;
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;

    padding: 50px 20px;
`;

// Styles in ImageUrl

export const ContainerImageUrl = styled.div`
    position: relative;
`;

export const ContentMovie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-right: 20px;
`;

export const VoteAverage = styled.span`
    display: flex;

    color: #f7f4f8;
    font-weight: bold;
    font-size: 0.9rem;
`;

export const Porcent = styled.span`
    font-size: 0.4rem;
`;

export const CircleContainer = styled.div`
    width: 38px;
    height: 38px;

    position: absolute;
    top: 90%;
    left: 10%;

    border-radius: 50%;
    background-color: #081c22;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CircleContent = styled.div`
    width: 34px;
    height: 34px;

    border-radius: 50%;
    border: 2px solid #21d07a;

    display: flex;
    align-items: center;
    justify-content: center;
`;

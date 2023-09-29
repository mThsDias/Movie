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
    background-color: #fff;

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

export const ContentMovie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-right: 20px;
`;

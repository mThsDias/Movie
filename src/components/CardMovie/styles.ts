import styled from "styled-components";

// Styles in SectionMovie
export const CustomBox = styled.div`
    overflow-x: auto;

    margin: 0 auto;
    background: url();

    white-space: nowrap;
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

// Styles in EffectBlur
export const EffectBlur = styled.div`
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80px;
    background: linear-gradient(
        to left,
        rgba(255, 255, 255, 1) 40%,
        rgba(255, 255, 255, 0) 100%
    );

    transition: opacity 0.9s ease;
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

export const CircleContainer = styled.div`
    width: 38px;
    height: 38px;
    position: absolute;

    top: 90.5%;
    left: 5%;

    border-radius: 50%;
    background: #081c22;

    display: flex;
    align-items: center;
    justify-content: center;
`;

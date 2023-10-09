import styled from "styled-components";

// Styles in SectionMovie
export const CustomBox = styled.div`
    overflow-x: auto;
    overflow-y: hidden;

    margin: 0 auto;

    background-size: cover;
    background-position: center;

    white-space: nowrap;
    border-radius: 0.2rem;
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

    padding: 2rem;
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

    a {
        text-decoration: none;
        color: #000;
    }

    a:hover {
        color: #46cde8;
    }
`;

export const CircleContainer = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;

    top: 90.5%;
    left: 5%;

    border-radius: 50%;
    background: #081c22;
`;

export const Title = styled.h2`
    white-space: normal;
    text-align: left;

    margin-top: 1rem;
    text-decoration: none;

    width: 100%;
    font-size: 1rem;
    line-height: 1.2rem;
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 140px;

    padding-top: 0.5rem;
`;

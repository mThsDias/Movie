import styled from "styled-components";

// Styles in MovieInfo
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 140px;
    height: 100%;

    padding-top: 0.5rem;
`;

export const Title = styled.h2`
    white-space: normal;
    text-align: left;

    margin-top: 1rem;

    width: 100%;
    font-size: 0.9rem;
    line-height: 1.2rem;
`;

export const Paragraph = styled.p`
    color: #666666;
    font-size: 0.8rem;
    padding-top: 0.3rem;
`;

//Styles in TitleMovie
export const TitleTrending = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
`;

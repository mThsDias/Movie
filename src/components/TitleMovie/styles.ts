import styled from "styled-components";

// Styles in MovieInfo
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 140px;

    padding-top: 0.5rem;
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

export const Paragraph = styled.p`
    color: #666666;
    font-size: 0.8rem;
    padding-top: 0.3rem;
`;

//Styles in TitleMovie
export const TitleTrending = styled.h1`
    font-size: 2rem;
    font-weight: 500;
`;

export const ContainerTitle = styled.div`
    margin-left: 2rem;
`;

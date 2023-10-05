import styled from "styled-components";

export const ContentMovie = styled.div`
    background: #233d;
    margin-top: 0.5rem;
`;

export const Container = styled.div`
    margin: 0 10rem;
    position: relative;
    background: #333;
`;

export const ContentMovieDescription = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;

    color: #fff;

    padding: 2rem 0;
`;

export const CircleContainer = styled.div`
    width: 80px;
    height: 80px;

    border-radius: 50%;
    background: #081c22;
`;

export const PercentageContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-top: 2rem;

    p {
        font-size: 1rem;
        font-weight: bold;
        width: 100%;
        max-width: 2rem;
    }
`;

export const SinopseContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    max-width: 1110px;

    p {
        font-size: 1rem;
        margin-top: 0.5rem;
    }
`;

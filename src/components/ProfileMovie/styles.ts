import styled from "styled-components";

export const ContentMovie = styled.div`
    margin-top: 0.5rem;
`;

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    position: relative;
`;

export const ContentMovieDescription = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;

    color: #fff;

    padding: 2rem 0;

    h1 {
        padding-bottom: 0.5rem;
    }
`;

export const CircleContainer = styled.div`
    width: 78px;
    height: 78px;

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
        line-height: 1.5rem;
        margin-top: 0.5rem;
    }
`;

export const CastContainer = styled.div`
    margin-top: 2rem;

    h3 {
        padding-bottom: 0.5rem;
    }
`;

export const MovieBackground = styled.div`
    background-image: url();
    background-size: cover;
    background-position: center;
`;

export const InfoContainer = styled.div`
    font-size: 2.8rem;

    p {
        font-size: 1rem;
    }
`;

export const TrailerContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const Trailer = styled.div`
    position: relative;
    margin-top: 15rem;
`;

export const CustomBox = styled.div`
    overflow-x: auto;
    overflow-y: hidden;

    margin: 0 auto;

    white-space: nowrap;
    border-radius: 0.2rem;
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;

    overflow-y: hidden;

    margin: 0 10rem;

    padding: 2rem;

    &::-webkit-scrollbar {
        height: 8px;
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

export const ContentCast = styled.div`
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

    div {
        padding: 1.8rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

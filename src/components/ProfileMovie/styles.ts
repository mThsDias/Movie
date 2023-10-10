import styled from "styled-components";

export const ContentMovie = styled.div`
    background: url(https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg);
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

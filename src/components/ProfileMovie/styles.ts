import styled from "styled-components";

export const ContentMovie = styled.div``;

export const BackgroundColor = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Container = styled.div`
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  width: 65px;
  height: 65px;

  padding: 0.2rem;

  border-radius: 50%;
  background: #081c22;
`;

export const PercentageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-top: 2rem;

  p {
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    max-width: 2rem;
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

  white-space: nowrap;
  border-radius: 0.2rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;

  width: 100%;
  max-width: 1120px;

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
    margin: 0.4rem 0 0 0.4rem;
    display: flex;
    flex-direction: column;
    height: 75px;
  }

  h3 {
    padding-bottom: 0.2rem;
    font-size: 1rem;
    width: 100%;
    max-width: 140px;
    white-space: normal;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const ContainerCastAndStaff = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-left: 20px;
  }
`;

export const CastCompleted = styled.span`
  display: flex;

  align-items: center;

  gap: 0.2rem;

  a {
    color: #000;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    height: 100%;
  }

  &&:hover {
    text-decoration: underline;
  }
`;

export const EffectBlur = styled.div`
  content: "";
  position: absolute;
  top: 40rem;
  right: 22rem;
  bottom: 0;
  width: 80px;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );

  transition: opacity 0.9s ease;
`;

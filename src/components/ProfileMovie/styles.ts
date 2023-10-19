import styled from "styled-components";

export const BackgroundColor = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
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
  width: 80px;
  height: 80px;

  padding: 0.3rem;

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

  padding-left: 1rem;

  overflow-y: hidden;

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
    height: 60px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    width: 100%;
    max-width: 1100px;
    padding: 2.5rem 0 1.5rem 0;
    text-align: left;
    font-size: 1.4rem;
    font-weight: 500;
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

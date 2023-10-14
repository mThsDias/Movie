import styled, { keyframes } from "styled-components";

// Styles in MovieInfo
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

export const ContainerButton = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const shimmer = keyframes`
  0% {
    background-position: left top;
  }

  100% {
    background-position: right bottom;
  }
`;

const particles = keyframes`
  0% {
    background-position: left top;
  }

  100% {
    background-position: right bottom;
  }
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  background: linear-gradient(to bottom, #1b1c3f, #4a4e91);
  color: white;
  font-family: "Segoe UI", sans-serif;
  font-weight: bold;
  font-size: 17px;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  animation: ${shimmer} 2s infinite;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(to bottom, #2c2f63, #5b67b7);
    animation: ${particles} 1s ease-in-out infinite;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

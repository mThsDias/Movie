import styled, { keyframes } from "styled-components";

// Styles in SectionMovie
export const CustomBox = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  margin: 0 auto;

  white-space: nowrap;
  border-radius: 0.2rem;
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

  overflow-y: hidden;

  background: #141414;
  backdrop-filter: blur(1px);

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

// Styles in ImageUrl
export const ContainerImageUrl = styled.div`
  position: relative;
`;

const animation = keyframes`

    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
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

  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  animation: ${animation} 1.5s ease-in-out;
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

  color: #ddd;

  margin-top: 1rem;
  text-decoration: none;

  width: 100%;
  font-size: 1rem;
  line-height: 1.2rem;

  span:hover {
    color: #46cde8;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 140px;

  padding-top: 0.5rem;
`;

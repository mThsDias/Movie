import styled from "styled-components";

// Styles in SectionMovie
export const CustomBox = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  padding: 0 2rem;

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

  backdrop-filter: blur(1px);

  padding: 1.2rem;

  &::-webkit-scrollbar {
    height: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dbdbdbdb;
    border-radius: 4px;
  }
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

  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const CircleContainer = styled.div`
  width: 44px;
  height: 44px;
  position: absolute;

  padding: 0.2rem;

  top: 90.5%;
  left: 5%;

  border-radius: 50%;
  background: #081c22;
`;

export const Title = styled.h2`
  white-space: normal;
  text-align: left;

  color: #000;

  margin-top: 1.3rem;
  text-decoration: none;

  width: 100%;
  font-size: 0.96rem;
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

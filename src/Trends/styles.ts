import styled, { keyframes } from "styled-components";

export const BoxTrends = styled.div`
  display: flex;
  align-items: center;
  margin: 2.5rem 0 0 1rem;

  h2 {
    margin-right: 1.8rem;
  }
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
  font-weight: 500;
  font-size: 0.9rem;
  border: none;
  border-radius: 30px;
  padding: 6px 15px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  animation: ${shimmer} 2s infinite;
  transition: all 0.3s ease-in-out;
  margin-left: 0.2rem;

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

export const ContainerItem = styled.div`
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

export const BoxItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-right: 20px;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  a {
    text-decoration: none;
    color: #000;
  }

  &:hover {
    opacity: 1;
  }
`;

export const BoxTitleAndDate = styled.div`
  white-space: normal;
  text-align: left;
  color: #000;
  margin-top: 1.3rem;
  text-decoration: none;
  width: 100%;
  font-size: 0.96rem;
  line-height: 1.2rem;

  h2 {
    font-size: 1em;
    cursor: pointer;
  }

  p {
    color: #666666;
    font-weight: 100;
    font-size: 1em;
    padding-top: 0.2rem;
  }

  h2:hover {
    color: #46cde8;
  }
`;

export const BoxImageAndPercentage = styled.div`
  position: relative;
  margin-bottom: 0.2rem;

  span {
    width: 40px;
    height: 40px;
    position: absolute;
    padding: 0.2rem;
    top: 90.5%;
    left: 5%;
    border-radius: 50%;
    background: #081c22;
  }
`;
import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  color: #fff;
`;

export const blur = styled.div`
  background: linear-gradient(to bottom, transparent, #0f0f0f);
  width: 100%;
  height: 100%;
`;

export const ContainerOnePiece = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  margin-top: 10rem;
`;

export const BoxOnePiece = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;

export const BoxDescription = styled.div`
  width: 47%;

  h1 {
    font-size: 5rem;
    line-height: 1;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  gap: 1rem;
`;

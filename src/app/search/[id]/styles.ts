import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0 0 10px #ccc;
  border-radius: 5px;
  margin: 10px;
  width: 1150px;
  height: 100%;
`;

export const Section = styled.div`
  display: flex;
`;

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  margin: 10px;
  width: 100%;

  p {
    font-size: 0.9rem;
    font-weight: 100;
    width: 1000px;
  }

  h5 {
    font-size: 1.1rem;
  }

  h6 {
    font-size: 1rem;
  }
`;

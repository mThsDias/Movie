import styled from "styled-components";

export const BoxGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h2 {
    color: #fdfdfd;
    font-size: 1.1rem;
    cursor: pointer;
  }

  p {
    color: #ccc;
    font-weight: 100;
    font-size: 0.9rem;
  }

  h2:hover {
    color: #46cde8;
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem 1rem;
  padding: 10rem;
  justify-items: center;
`;

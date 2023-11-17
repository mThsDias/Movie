import styled from "styled-components";

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;

  h4 {
    width: 120px;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const SinopseContainer = styled.div`
  width: 100%;
  max-width: 1010px;

  p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

export const CastContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    gap: 10rem;
    padding-bottom: 0.6rem;
  }

  ul {
    list-style: none;
  }
`;

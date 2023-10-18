import styled from "styled-components";

export const CastItem = styled.li`
  display: flex;
`;

export const SinopseContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  max-width: 1110px;

  p {
    font-size: 1rem;
    line-height: 1.2rem;
    margin-top: 1rem;
  }
`;

export const CastContainer = styled.div`
  margin-top: 1rem;

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

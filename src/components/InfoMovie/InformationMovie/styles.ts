import styled from "styled-components";

export const Container = styled.div``;

export const TagLine = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 2.3rem;
    font-weight: bold;
  }

  span {
    font-size: 2rem;
    color: #ced2ce;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
  }
`;

export const ListGenres = styled.div`
  ul {
    list-style: none;
  }
`;

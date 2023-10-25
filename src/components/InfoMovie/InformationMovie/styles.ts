import styled from "styled-components";

export const Container = styled.div``;

export const RunTime = styled.p`
  color: #ced2ce;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding-left: 2rem;
  text-align: center;

  p {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

export const TagLine = styled.p`
  padding: 1.5rem 0 1rem 0;

  font-size: 1rem;
  font-weight: 500;
  color: #ced2ce;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 2rem;
    font-weight: bold;
  }

  span {
    font-size: 1.8rem;
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

export const ContainerSubInfo = styled.div`
  h5 {
    font-size: 0.96rem;
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    width: 250px;
  }
`;

export const Link = styled.div`
  margin-bottom: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    text-decoration: none;
    color: #000;

    &:hover {
      color: #46cde8;
    }
  }
`;

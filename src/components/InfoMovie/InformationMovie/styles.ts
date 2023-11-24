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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
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
    display: flex;
    gap: 0.5rem;
  }

  li {
    border: 1px solid #ced2ce;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.9rem;
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

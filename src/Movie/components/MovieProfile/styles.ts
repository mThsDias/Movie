import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 230vh;
  background: #0f0f0f;
`;

export const Container = styled.div`
  background: linear-gradient(to bottom, transparent, #0f0f0f);
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 15rem;
  justify-content: center;
  gap: 2rem;
  color: #fff;
`;

export const Tagline = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #ced2ce;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1020px;
`;

export const BoxGenres = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    border: 1px solid #ced2ce;
    border-radius: 1rem;
    padding: 0.3rem 2rem;
    font-size: 1.2rem;
  }
`;

export const BoxOverview = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    padding-top: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 700px;
  }
`;

export const BoxTaglineAndRuntime = styled.div`
  display: flex;
  align-items: center;
  gap: 4.7rem;
  padding: 2rem 0;
`;

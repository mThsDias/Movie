import styled from "styled-components";

export const Play = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 0.95rem;

  &:hover {
    cursor: pointer;
    color: #b4ab9e;
  }
`;

export const TrailerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Trailer = styled.div`
  position: relative;
  margin-top: 15rem;
`;

export const teste = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 1rem 0.8rem;
  background: #000;

  span {
    color: #fff;
    font-size: 1.15rem;
    font-weight: bold;
  }

  svg {
    font-size: 1.1rem;
    color: #b4ab9e;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
`;

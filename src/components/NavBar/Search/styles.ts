import styled from "styled-components";

export const Box = styled.div``;

export const Content = styled.div`
  margin: 0 auto;
  background: linear-gradient(to right, #1b1c3f, #474da6);
  width: 1320px;
  padding: 5rem 2.5rem;

  h1 {
    font-size: 2.9rem;
    font-weight: 700;
    color: #fff;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 4rem;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  div {
    position: absolute;
    right: 0;
    min-height: 50px;
    border: none;
    border-radius: 40px;
    background: linear-gradient(to top, #1b1c3f, #2d305e);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    a {
      text-decoration: none;
    }

    &:hover {
      background: linear-gradient(to bottom, #2c2f63, #5b67b7);
    }
  }

  button {
    margin: 0 2rem;
    font-weight: 600;
    color: #fff;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  min-height: 50px;
  width: 100%;
  padding: 0 1rem;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #5e4dcd;
  border-radius: 40px;
  background-color: #fff;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border: #3898ec;
  }
`;

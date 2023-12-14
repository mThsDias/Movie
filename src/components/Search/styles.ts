import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 500px;

  input {
    width: 100%;
    height: 40px;
    padding: 0 30px;
    border: 1px solid #ddd;
    border-radius: 20px;
    font-size: 18px;
    color: #444;
  }

  button {
    width: 50px;
    height: 35px;
    font-size: 16px;
    background-color: #991111;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background-color: #cc2222;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

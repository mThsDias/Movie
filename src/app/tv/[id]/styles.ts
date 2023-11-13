import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  border: 1px solid #ccc;
  box-shadow: 0 0 10px #ccc;
  border-radius: 5px;
  margin: 10px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxDescription = styled.div`
  margin: 10px;
  width: 1000px;

  p {
    margin-top: 1.8rem;
    font-size: 0.9rem;
    font-weight: 100;
  }

  h5 {
    font-size: 1.1rem;
  }

  h6 {
    font-size: 1rem;
  }
`;

export const BoxFilter = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 2px #ccc;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxCardAndFilter = styled.div`
  display: flex;
  justify-content: center;
`;

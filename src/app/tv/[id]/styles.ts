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
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
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
  border-radius: 5px;
  box-shadow: 0 0 2px #ccc;
  width: 250px;
  height: 155px;
  display: flex;
  flex-direction: column;

  h3 {
    background: #01b4e4;
    color: #fff;
    padding-left: 20px;
    width: 100%;
    height: 100px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: flex;
    align-items: center;
  }
`;

export const BoxCardAndFilter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerListFilter = styled.div`
  ul {
    list-style: none;
    margin: 0.3rem 0;
  }

  a {
    width: 100%;
    height: 100%;
    padding: 10px 20px;
  }

  span {
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    border: 1px solid #ccc;
    background: #ccc;
    border-radius: 8px;
    margin-right: 20px;
    white-space: nowrap;
  }

  li {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    line-height: 1.4em;
    cursor: pointer;
  }
`;

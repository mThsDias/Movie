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
  margin-left: 15px;
  width: 960px;

  p {
    margin-top: 1.5rem;
    font-size: 0.95rem;
    font-weight: 100;
    width: 900px;
  }

  h5 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #01b4e4;
    }
  }

  span {
    font-size: 0.95rem;
    color: #999999;
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
    font-size: 0.95rem;
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
    font-size: 0.8rem;
  }

  li {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
  }
`;

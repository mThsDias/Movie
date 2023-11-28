import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding-top: 5rem;
  background: url("https://github.com/trananhtuat/react-movie/blob/main/src/assets/footer-bg.jpg?raw=true");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BoxFooter = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;

  li {
    list-style: none;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    padding: 0.8rem 0;
  }
`;

export const BoxLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

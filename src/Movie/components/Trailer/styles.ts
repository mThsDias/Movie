import styled from "styled-components";

export const ContainerTrailer = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;

  div {
    position: absolute;
    top: 100%;

    h1 {
      font-size: 1.5rem;
      padding: 2rem 0;
    }
  }

  iframe {
    position: relative;
    border: none;
  }
`;

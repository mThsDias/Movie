import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  margin-top: 2rem;

  ol {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
  }
`;

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 5rem;
`;

export const HeaderNav = styled.menu`
  display: flex;
  align-items: center;

  li {
    padding: 5px 0;
    font-weight: 600;
    position: relative;
    font-size: 1.7rem;
    color: #fff;
    cursor: pointer;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #cc0000;
    }
  }
`;

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;

  span {
    font-size: 1.7rem;
    font-weight: 700;
  }
`;

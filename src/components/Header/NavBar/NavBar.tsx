import React from "react";

import * as S from "./styles";
import icon from "../../../assets/icon.png";
import Link from "next/link";

export const NavBar = () => {
  return (
    <S.Header>
      <S.HeaderWrap>
        <S.BoxLogo>
          <img
            src={icon.src}
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
          <span>GO Movies</span>
        </S.BoxLogo>
        <S.HeaderNav>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <li>Movies</li>
            <li>Series</li>
            <li>My List</li>
          </ul>
        </S.HeaderNav>
      </S.HeaderWrap>
    </S.Header>
  );
};
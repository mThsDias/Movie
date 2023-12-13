import React from "react";

import * as S from "./styles";
import icon from "../../../assets/icon.png";
import Link from "next/link";
import Image from "next/image";
import { Search } from "@/components/Search/Search";

export const NavBar = () => {
  return (
    <S.Header>
      <S.HeaderWrap>
        <S.BoxLogo>
          <Image src={icon} alt="logo" width={40} height={40} />
          <span>GO Movies</span>
          <Search />
        </S.BoxLogo>
        <S.HeaderNav>
          <ol>
            <li>
              <Link rel="preconnect" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link rel="preconnect" href={"/listMovie"}>
                Movies
              </Link>
            </li>
            <li>
              <Link rel="preconnect" href={"/listTv"}>
                Series
              </Link>
            </li>
          </ol>
        </S.HeaderNav>
      </S.HeaderWrap>
    </S.Header>
  );
};

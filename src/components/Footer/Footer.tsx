import React from "react";
import * as S from "./styles";
import icon from "../../assets/icon.png";

export const Footer = () => {
  return (
    <S.ContainerFooter>
      <S.BoxLogo>
        <img
          src={icon.src}
          alt="logo"
          style={{ width: "40px", height: "40px" }}
        />
        <h1>GO Movies</h1>
      </S.BoxLogo>
      <S.BoxFooter>
        <div>
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>Term of services</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Live</li>
            <li>FAQ</li>
            <li>Premium</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>You must watch</li>
            <li>Recent release</li>
            <li>Top IMBD</li>
          </ul>
        </div>
      </S.BoxFooter>
    </S.ContainerFooter>
  );
};

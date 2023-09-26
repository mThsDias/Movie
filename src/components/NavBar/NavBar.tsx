"use client";
import React from "react";
import "./NavBar.css";
import { BsBell } from "react-icons/bs";

export const NavBar = () => {
    return (
        <nav className="container-nav">
            <div className="div-container-nav">
                <h1>FlixHub</h1>
                <ul>
                    <li>Início</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <li>Minha lista</li>
                </ul>
            </div>
            <div className="container-nav__user">
                <BsBell
                    style={{ color: "#fff", width: "32px", fontSize: "1.5rem" }}
                />
                <img
                    style={{ width: "32px", height: "32px" }}
                    src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
                    alt="user"
                />
            </div>
        </nav>
    );
};

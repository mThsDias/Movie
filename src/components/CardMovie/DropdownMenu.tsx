import React from "react";
import { BsStarFill, BsListUl } from "react-icons/bs";
import "./Card.css";

type DropdownMenuProps = {
    isOpen: boolean;
};

export const DropdownMenu = ({ isOpen }: DropdownMenuProps) => {
    if (!isOpen) return null;
    return (
        <nav className="container-nav-card">
            <ul>
                <li>
                    <span>
                        <BsListUl />
                        Adicionar à lista
                    </span>
                </li>
                <li>
                    <span>
                        <BsStarFill />
                        Sua avaliação
                    </span>
                </li>
            </ul>
        </nav>
    );
};

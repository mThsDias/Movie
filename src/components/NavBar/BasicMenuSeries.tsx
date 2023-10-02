import React from "react";
import { Menu, MenuItem } from "@mui/material";
import * as S from "./styles";

type BasicMenuMoviesProps = {
    titleSerie: string;
};

export const BasicMenuSeries = ({ titleSerie }: BasicMenuMoviesProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <S.StyleButton onClick={handleClick}>{titleSerie}</S.StyleButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Populares</MenuItem>
                <MenuItem onClick={handleClose}>Em exibição hoje</MenuItem>
                <MenuItem onClick={handleClose}>Bem mais avaliados</MenuItem>
            </Menu>
        </>
    );
};

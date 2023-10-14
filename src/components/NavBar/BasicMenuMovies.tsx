import React from "react";
import { Menu, MenuItem } from "@mui/material";
import * as S from "./styles";

type BasicMenuMovieProps = {
  titleMovie: string;
};

export default function BasicMenuMovie({ titleMovie }: BasicMenuMovieProps) {
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
      <S.StyleButton onClick={handleClick}>{titleMovie}</S.StyleButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Populares</MenuItem>
        <MenuItem onClick={handleClose}>Em cartaz</MenuItem>
        <MenuItem onClick={handleClose}>Próximas Estreias</MenuItem>
      </Menu>
    </>
  );
}

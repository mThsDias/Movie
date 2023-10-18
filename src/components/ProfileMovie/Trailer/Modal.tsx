import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { TrailerModal } from "./TrailerModal";

const style = {
  position: "absolute" as const,
  top: "38%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const styleButton = {
  color: "white",
  display: "flex",
  gap: ".5rem",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button style={styleButton} onClick={handleOpen}>
        <PlayArrowIcon />
        Reproduzir trailer
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TrailerModal onClose={handleClose} />
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

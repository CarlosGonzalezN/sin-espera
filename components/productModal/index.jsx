import { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";

export default function productModal({ openModal }) {
  const [open, setOpen] = useState(openModal);
  const handleClose = () => setOpen(false);
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
}

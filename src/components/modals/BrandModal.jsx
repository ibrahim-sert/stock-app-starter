import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BrandModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            variant="outlined"
            label="Brand Name"
            name="name"
            id="name"
            type="text"
          ></TextField>
          <TextField
            variant="outlined"
            label="Image Url"
            name="image"
            id="image"
            type="url"
          ></TextField>
          <Button variant="contained" color="primary">
            Save Brand
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default BrandModal;

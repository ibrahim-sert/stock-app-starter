import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";

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

const BrandModal = ({ info, setInfo, open, handleClose }) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const { putStockData } = useStockCall();
  const { postStockData } = useStockCall();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putStockData("brands", info);
    } else {
      postStockData("brands", info);
    }
    handleClose();
    setInfo({});
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setInfo({});
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onSubmit={handleSubmit} sx={style} component="form">
          <TextField
            variant="outlined"
            label="Brand Name"
            name="name"
            id="name"
            type="text"
            onChange={handleChange}
            value={info?.name || ""}
          ></TextField>
          <TextField
            variant="outlined"
            label="Image Url"
            name="image"
            id="image"
            type="url"
            onChange={handleChange}
            value={info?.image || ""}
          ></TextField>
          <Button type="submit" variant="contained" color="primary">
            Save Brand
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default BrandModal;

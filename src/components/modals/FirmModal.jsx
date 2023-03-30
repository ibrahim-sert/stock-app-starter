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

export default function FirmModal({ open, info, setInfo, handleClose }) {
  const { putStockData } = useStockCall();
  const { postStockData } = useStockCall();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInfo({ ...info, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putStockData("firms", info);
    } else {
      postStockData("firms", info);
    }
    setInfo({});
    handleClose();
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
        <Box sx={style}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Firm name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={info?.name || ""}
            />
            <TextField
              label="Firm Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              onChange={handleChange}
              value={info?.phone || ""}
            />
            <TextField
              label="Firm Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={info?.address || ""}
            />
            <TextField
              label="Logo"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              onChange={handleChange}
              value={info?.image || ""}
            />
            <Button loadingPosition="center" variant="contained" type="submit">
              Save Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

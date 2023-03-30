import { Button, Typography } from "@mui/material";
import React from "react";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modals/BrandModal";

const Brands = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Typography variant="h4" color="primary" mb={4}>
        Brands
      </Typography>
      <Button onClick={handleOpen} variant="contained">
        NEW BRANDS
      </Button>
      <BrandModal open={open} handleClose={handleClose} />
      <BrandCard />
    </div>
  );
};

export default Brands;

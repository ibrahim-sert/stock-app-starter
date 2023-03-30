import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modals/BrandModal";
import useStockCall from "../hooks/useStockCall";

const Brands = () => {
  const [info, setInfo] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("brands");
  }, []);

  const { brands } = useSelector((state) => state.stock);
  return (
    <div>
      <Typography variant="h4" color="primary" mb={4}>
        Brands
      </Typography>
      <Button onClick={handleOpen} variant="contained">
        NEW BRANDS
      </Button>
      <BrandModal
        setInfo={setInfo}
        info={info}
        open={open}
        handleClose={handleClose}
      />
      {brands?.map((brand) => (
        <Grid key={brand.id}>
          <BrandCard setInfo={setInfo} brand={brand} />
        </Grid>
      ))}
    </div>
  );
};

export default Brands;

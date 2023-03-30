import { Alert, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/modals/BrandModal";
import useStockCall from "../hooks/useStockCall";
import { flex, flexCenter } from "../styles/globalStyle";

const Brands = () => {
  const [info, setInfo] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("brands");
  }, []);

  const { brands, loading } = useSelector((state) => state.stock);
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

      {!loading && !brands?.length && (
        <Alert severity="warning" sx={{ mt: 4, width: "50%" }}>
          There is no brand to show
        </Alert>
      )}

      {brands?.length > 0 && (
        <Grid container sx={flexCenter}>
          {brands?.map((brand) => (
            <Grid key={brand.id}>
              <BrandCard setInfo={setInfo} setOpen={setOpen} brand={brand} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Brands;

import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";

const Firms = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <>
      <Typography variant="h4" color="primary" mb={4}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        NEW FIRM
      </Button>
      <FirmModal
        info={info}
        setInfo={setInfo}
        open={open}
        handleClose={handleClose}
      />
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Firms;

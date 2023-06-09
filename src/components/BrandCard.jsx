import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle, flex } from "../styles/globalStyle";
import useStockCall from "../hooks/useStockCall";

const BrandCard = ({ brand, setOpen, setInfo }) => {
  const { deleteStockData } = useStockCall();
  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand.name}
        </Typography>
        <CardMedia
          image={brand?.image}
          sx={{ p: 1, objectFit: "contain", height: "250px" }}
          component="img"
          alt="brand-img"
        />
      </CardContent>
      <CardActions sx={flex}>
        <EditIcon
          onClick={() => {
            setInfo(brand);
            setOpen(true);
          }}
          sx={btnStyle}
        />

        <DeleteOutlineIcon
          onClick={() => deleteStockData("brands", brand.id)}
          sx={btnStyle}
        />
      </CardActions>
    </Card>
  );
};

export default BrandCard;

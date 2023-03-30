import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle, flex } from "../styles/globalStyle";

const BrandCard = ({ brand }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand.name}
        </Typography>
        <CardMedia sx={{ height: 140 }} image={brand.image} title="imic" />
      </CardContent>
      <CardActions sx={flex}>
        <EditIcon sx={btnStyle} />

        <DeleteOutlineIcon sx={btnStyle} />
      </CardActions>
    </Card>
  );
};

export default BrandCard;

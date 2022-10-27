/* 
          {data.ingredients.map((item) => {
            return <ListItemText primary={item} />;

 */

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Image from "../../public/pizza.jpg";

export default function MediaControlCard() {
  const theme = useTheme();

  const data = {
    nombre: "Pizza",
    imagen: "",
    description: "Pizza de muzzarela",
    ingredients: ["harina de trigo", "muzzarela", "aceituna", "oregano"],
    size: "8 porciones",
    time: "10 min",
  };
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {data.nombre}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {data.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? "+" : "-"}
          </IconButton>
          <IconButton aria-label="play/pause">0</IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? "-" : "+"}
          </IconButton>
        </Box>
      </Box>
      <CardMedia />
    </Card>
  );
}

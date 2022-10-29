import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function MediaControlCard({ data }) {
  const [cantidad, setCantidad] = useState(0);
  const theme = useTheme();
  const handleClickRemove = () => {
    if (cantidad === 0) {
      setCantidad(0);
    }
    const result = cantidad - 1;
    setCantidad(result);
  };
  const handleClickPlus = () => {
    const result = cantidad + 1;
    setCantidad(result);
  };
  return (
    <>
      {data.map((data) => (
        <Card sx={{ display: "flex", marginTop: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {data.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {data.body}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous" onClick={handleClickRemove}>
                -
              </IconButton>
              <IconButton aria-label="play/pause">{cantidad}</IconButton>
              <IconButton aria-label="next" onClick={handleClickPlus}>
                +
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 129, height: 97, marginTop: 4 }}
            image="/pizza.png"
            alt="Live from space album cover"
          />
        </Card>
      ))}
    </>
  );
}

import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { ProductModal } from "../index";
import { CardActionArea } from "@mui/material";
export default function MediaControlCard({ data }) {
  const [cantidad, setCantidad] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleOplenModal = () => {
    setOpenModal(true);
  };

  const handleClickRemove = () => {
    if (cantidad >= 0) {
      return setCantidad(0);
    } else {
      setCantidad(cantidad - 1);
    }
  };

  const handleClickPlus = () => {
    const result = cantidad + 1;
    setCantidad(result);
  };
  return (
    <>
      {data.map((data) => (
        <Card sx={{ display: "flex", marginTop: 3 }} key={data.id}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {data.Nombre}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {data.DescripcionCategoria}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Typography component="div" variant="h4">
                ${data.Precio}
              </Typography>
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
      <ProductModal openModal={openModal} />
    </>
  );
}

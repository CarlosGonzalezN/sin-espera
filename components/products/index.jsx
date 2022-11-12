import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Typography from "@mui/material/Typography";
import { CardActions, Button, Modal } from "@mui/material";
import { ProductModal } from "../index";
export default function MediaControlCard({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const [cantidad, setCantidad] = useState(0);
  const [dataTest, setDataTest] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3005/productos")
      .then((res) => res.json())
      .then((data) => {
        setDataTest(data);
      });
  }, []);
  console.log(dataTest);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  const handleCantidad = () => {
    const result = cantidad + 1;
    setCantidad(result);
  };
  const handleCantidadRemove = () => {
    if (cantidad < 1) {
      return setCantidad(0);
    }
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
              <CardActions>
                <Button size="small" onClick={handleModal}>
                  <AddShoppingCartIcon />
                </Button>
              </CardActions>
            </Box>
          </Box>

          <CardMedia
            component="img"
            sx={{ width: 129, height: 97, marginTop: 4 }}
            image="/empanada.png"
            alt="Live from space album cover"
          />
        </Card>
      ))}
      <Modal
        keepMounted
        open={openModal}
        onClose={handleModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Elija la cantidad
          </Typography>
          <Box>
            <Button onClick={handleCantidadRemove}>-</Button>
            <Typography>{cantidad}</Typography>
            <Button onClick={handleCantidad}>+</Button>
          </Box>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={handleModal}
          >
            Cancelar
          </Button>
          <Button variant="contained" sx={{ marginLeft: 3 }}>
            Pedir
          </Button>
        </Box>
      </Modal>
    </>
  );
}

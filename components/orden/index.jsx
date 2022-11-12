import { useState, useEffect } from "react";
import Router from "next/router";
import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";

import { ProductModal } from "../index";
import styles from "../../styles/Home.module.css";
import { redirect } from "next/dist/server/api-utils";
export default function Orden() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    handleOplenModal();
  }, [openModal]);
  function handleOplenModal() {
    setOpenModal(true);
  }
  const pedido = [
    {
      id: "1",
      idMesa: 1,
      nombre: "nahuel",
      platos: ["milanesa de carne", "empanad de pollo", "cerveza", "papas"],
      gasto: 2000,
      estado: "pagado",
    },
    {
      id: "2",
      idMesa: 1,
      nombre: "alan",
      platos: ["milanesa de carne", "empanad de pollo"],
      gasto: 1800,
      estado: " No pagado",
    },
    {
      id: "3",
      idMesa: 1,
      nombre: "joni",
      platos: ["milanesa de carne", "empanad de pollo"],
      gasto: 1800,
      estado: " No pagado",
    },
  ];
  return (
    <>
      <Typography variant="h4">Detalle de pedidos</Typography>
      {pedido.map(({ id, nombre, platos, gasto, estado }) => (
        <div className={styles.container}>
          <Card key={id} className={styles.card}>
            <Box>
              <Typography>{nombre.toUpperCase()}</Typography>
            </Box>
            <CardContent>
              {estado === "pagado" ? (
                <Typography>{estado}</Typography>
              ) : (
                <Typography>${gasto}</Typography>
              )}
              {platos.map((platos) => (
                <lu>
                  <li>{platos}</li>
                </lu>
              ))}
            </CardContent>
          </Card>
        </div>
      ))}
      <Button
        onClick={() => {
          Router.push("/menu");
        }}
      >
        Click me
      </Button>
      <ProductModal openModal={openModal} />
    </>
  );
}

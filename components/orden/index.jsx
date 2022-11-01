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
import styles from "../../styles/Home.module.css";
export default function Orden() {
  const pedido = [
    {
      id: "1",
      nombre: "nahuel",
      platos: ["milanesa de carne", "empanad de pollo"],
      gasto: 2000,
    },
    {
      id: "2",
      nombre: "alan",
      platos: ["milanesa de carne", "empanad de pollo"],
      gasto: 1800,
    },
    {
      id: "3",
      nombre: "joni",
      platos: ["milanesa de carne", "empanad de pollo"],
      gasto: 1800,
    },
  ];
  return (
    <>
      <Typography variant="h4">Detalle de pedidos</Typography>
      {pedido.map(({ id, nombre, platos, gasto }) => (
        <div className={styles.container}>
          <Card key={id} className={styles.card}>
            <Box>
              <Typography>{nombre.toUpperCase()}</Typography>
            </Box>
            <CardContent>
              <Typography>${gasto}</Typography>
              {platos.map((platos) => (
                <lu>
                  <li>{platos}</li>
                </lu>
              ))}
            </CardContent>
          </Card>
        </div>
      ))}
      <Button variant="contained">Pagar</Button>
    </>
  );
}

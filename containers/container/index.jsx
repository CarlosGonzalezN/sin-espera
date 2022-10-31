import { Container, Typography } from "@mui/material";
import {
  Carrousel,
  Category,
  Products,
  Promotion,
  Serch,
} from "../../components";
import styles from "../../styles/Home.module.css";
export default function container({ data, dataCategoria }) {
  return (
    <Container>
      <Typography variant="h3">Menu</Typography>
      <Category dataCategoria={dataCategoria} />
      <Products data={data} />
    </Container>
  );
}

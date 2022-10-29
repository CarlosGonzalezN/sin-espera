import { Container } from "@mui/material";
import {
  Carrousel,
  Category,
  Products,
  Promotion,
  Serch,
} from "../../components";
export default function container({ data, dataCategoria }) {
  return (
    <Container>
      <Category dataCategoria={dataCategoria} />
      <Products data={data} />
    </Container>
  );
}

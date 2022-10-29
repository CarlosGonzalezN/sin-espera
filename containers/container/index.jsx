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
    <Container
      sx={{
        display: "grid",
        justifyContent: "center",
        rowGap: 20,
        align: "center",
        marginTop: 5,
      }}
    >
      <Category dataCategoria={dataCategoria} />
      <Products data={data} />
    </Container>
  );
}

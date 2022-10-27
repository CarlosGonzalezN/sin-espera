import { Container } from "@mui/material";
import {
  Carrousel,
  Category,
  Products,
  Promotion,
  Serch,
} from "../../components";
export default function container() {
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
      <Category />
      <Products />
    </Container>
  );
}

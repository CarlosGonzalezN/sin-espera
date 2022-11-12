import { Container, Typography } from "@mui/material";
import { Category, Products, Navb } from "../../components";
export default function container({ data, dataCategoria }) {
  return (
    <Container>
      <Typography variant="h3">Menu</Typography>
      <Products data={data} />
    </Container>
  );
}

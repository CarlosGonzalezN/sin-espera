import { Container, Typography } from "@mui/material";
import { Category, Products, Navb } from "../../components";
export default function container({ data, dataCategoria }) {
  return (
    <Container>
      <Typography variant="h3">Menu</Typography>
      <Category dataCategoria={dataCategoria} />
      <Products data={data} />
    </Container>
  );
}

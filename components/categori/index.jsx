import { ButtonGroup, Button, Box, Stack } from "@mui/material";
import styles from "../../styles/Home.module.css";

export default function Category({ dataCategoria }) {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      {dataCategoria.map((dataCategoria) => (
        <Button key={dataCategoria.id} size="small" variant="text">
          {" "}
          {dataCategoria.descripcion}
        </Button>
      ))}
    </Box>
  );
}

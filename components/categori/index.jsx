import { Button } from "@mui/material";

export default function Category({ dataCategoria }) {
  return (
    <>
      {dataCategoria.map((dataCategoria) => (
        <Button sx={{ marginLeft: 10 }}> {dataCategoria.descripcion}</Button>
      ))}
    </>
  );
}

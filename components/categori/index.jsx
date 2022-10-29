import { Button } from "@mui/material";

export default function Category({ dataCategoria }) {
  console.log(dataCategoria);
  return (
    <>
      {dataCategoria.map((dataCategoria) => (
        <Button sx={{ display: "flex", alignItems: "stretch" }}>
          {" "}
          {dataCategoria.descripcion}
        </Button>
      ))}
    </>
  );
}

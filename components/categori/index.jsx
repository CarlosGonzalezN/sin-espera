import { Button } from "@mui/material";

export default function Category({ dataCategoria }) {
  return (
    <>
      {dataCategoria.map((dataCategoria) => (
        <Button sx={{ marginLeft: 10 }} key={dataCategoria.id}>
          {" "}
          {dataCategoria.username}
        </Button>
      ))}
    </>
  );
}

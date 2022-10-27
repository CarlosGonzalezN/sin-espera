import { Box, TextField, Button, Typography } from "@mui/material";
import Router from "next/router";
import { useState } from "react";
export default function Register() {
  const [nombre, setNombre] = useState("");

  const handleChange = (e) => {
    setNombre((nombre = e.target.value));
  };
  const handleSumbit = (e) => {
    const orden = { mesa: "01", nombre: nombre };
    localStorage.setItem("orden", JSON.stringify(orden));
    Router.push("/menu");
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{}}>
      <div>
        <Typography variant="h6" gutterBottom>
          Registrese
        </Typography>
        <br />

        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
        <br />
        <Button
          size="small"
          variant="contained"
          sx={{ marginTop: 3, marginLeft: 15 }}
          onClick={handleSumbit}
        >
          Registrar
        </Button>
      </div>
    </Box>
  );
}

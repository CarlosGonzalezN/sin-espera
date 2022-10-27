import { Rowing } from "@material-ui/icons";
import { Box, TextField, Button, Typography } from "@mui/material";
export default function Register() {
  return (
    <Box component="form" noValidate autoComplete="off" sx={{}}>
      <div>
        <Typography variant="h6" gutterBottom>
          Registrese
        </Typography>
        <br />

        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <br />
        <Button
          size="small"
          variant="contained"
          sx={{ marginTop: 3, marginLeft: 15 }}
        >
          Registrar
        </Button>
      </div>
    </Box>
  );
}

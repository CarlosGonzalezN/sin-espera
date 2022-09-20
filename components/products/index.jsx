import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Typography } from "@mui/material";
import { image } from "../../public/muzzarela.png";
export default function Producto() {
  const data = {
    nombre: "Pizza",
    imagen: image,
    description: "Pizza de muzzarela",
    ingredients: ["harina de trigo", "muzzarela", "aceituna", "oregano"],
    size: "8 porciones",
    time: "10 min",
  };

  return (
    <div></div>
    /*     <div>
      <Typography align="center" variant="h1">
        {data.nombre}
      </Typography>
      <Typography align="center" variant="h6">
        {data.description}
      </Typography>

      <Typography gutterBottom variant="body1">
        lorem
      </Typography>

      <List component="nav" aria-label="cicle">
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          {data.ingredients.map((item) => {
            return <ListItemText primary={item} />;
          })}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Carrito" />
        </ListItem>
      </List>
      <Divider />
    </div> */
  );
}

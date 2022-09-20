import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Avatar from "@mui/material/Avatar";

const Nav = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Avatar />
          <div>
            <AddShoppingCartIcon />
            <CircleNotificationsIcon />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;

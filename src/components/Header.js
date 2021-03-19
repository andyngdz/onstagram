import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Home,
  WhatsApp,
  FavoriteBorder,
  ExploreOutlined,
} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: theme.spacing(2),
  },
  header: {
    fontFamily: "Great Vibes",
    fontWeight: "bold",
  },
}));

const Header = () => {
  const style = useStyle();

  return (
    <AppBar color="transparent" variant="outlined" position="sticky">
      <Toolbar className={style.root}>
        <Box>
          <Typography variant="h4" className={style.header}>
            Onstagram
          </Typography>
        </Box>
        <Box className={style.box}>
          <Home />
          <WhatsApp />
          <FavoriteBorder />
          <ExploreOutlined />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

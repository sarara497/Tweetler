import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 26,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
});

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem>
        <Button href="/home" color="inherit">
          Home
        </Button>
      </MenuItem>
      <MenuItem>
        <Button hre="/explore" color="inherit">
          Explore
        </Button>
      </MenuItem>
      <MenuItem>
        <Button href="/bookmarks" color="inherit">
          BookMarks
        </Button>
      </MenuItem>
      <MenuItem>
        <Button href="/profile" color="inherit">
          <AccountCircle /> Profile
        </Button>
      </MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Button href="/home" style={{ fontSize: "20px" }} color="inherit">
        Home
      </Button>
      <Button href="/explore" style={{ fontSize: "20px" }} color="inherit">
        Explore
      </Button>
      <Button href="/bookmarks" style={{ fontSize: "20px" }} color="inherit">
        BookMarks
      </Button>
      <Button href="/profile" color="inherit">
        <AccountCircle style={{ fontSize: "50px" }} />
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);

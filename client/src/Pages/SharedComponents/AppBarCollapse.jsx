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
        <Button href="/" color="inherit">
          Home
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">Explore</Button>
      </MenuItem>
      <MenuItem>
        <Button href="/BookMarks" color="inherit">
          BookMarks
        </Button>
      </MenuItem>
      <MenuItem>
        <Button href="/Profile" color="inherit">
          <AccountCircle /> Profile
        </Button>
      </MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Button href="/" style={{ fontSize: "30px" }} color="inherit">
        Home
      </Button>
      <Button style={{ fontSize: "30px" }} color="inherit">
        Explore
      </Button>
      <Button href="/BookMarks" style={{ fontSize: "30px" }} color="inherit">
        BookMarks
      </Button>
      <Button href="/Profile" color="inherit">
        <AccountCircle style={{ fontSize: "60px" }} />
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);

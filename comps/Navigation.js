import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PublicIcon from "@material-ui/icons/Public";
import LockIcon from "@material-ui/icons/Lock";

import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import CreateIcon from "@material-ui/icons/Create";
import DraftsIcon from "@material-ui/icons/Drafts";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const useStyles = makeStyles((theme) => ({
  appName: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  },
  drawerContainer: {
    width: 240
  },

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  }
}));

export default function Navigation(props) {
  const classes = useStyles();

  const content = {
    link1: "Public",
    link2: "Private",
    link3: "Drafts",
    link4: "New Post",
    ...props.content
  };

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Link
          href="/"
          variant="h5"
          color="inherit"
          underline="none"
          className={classes.appName}
        >
          Good Time Journal
        </Link>
      </Toolbar>

      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List>
            <Link href="#">
              <ListItem button key={content["link1"]}>
                <ListItemIcon>
                  <PublicIcon />
                </ListItemIcon>
                <ListItemText primary={content["link1"]} />
              </ListItem>
            </Link>
            <Link href="#">
              <ListItem button key={content["link2"]}>
                <ListItemIcon>
                  <LockIcon />
                </ListItemIcon>
                <ListItemText primary={content["link2"]} />
              </ListItem>
            </Link>
            <Link href="#">
              <ListItem button key={content["link3"]}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary={content["link3"]} />
              </ListItem>
            </Link>
            <Link href="#">
              <ListItem button key={content["link4"]}>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText primary={content["link4"]} />
              </ListItem>
            </Link>
            <Divider />
            <div>
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
                //  style={{ justifyContent: "center", paddingLeft: "0.5em" }}
              >
                <TextField
                  id="standard-basic"
                  label="Search Posts"
                  fullWidth
                  variant="filled"
                />
              </form>
            </div>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}

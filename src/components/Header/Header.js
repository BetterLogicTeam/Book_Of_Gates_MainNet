import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles, useMediaQuery, useTheme, Grid } from "@material-ui/core";

import "./Header.css";
import DrawerComponents from "./Drawer";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    // background: "none",
  },

  containers: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "0.7rem 2rem",
  },
  navLinks: {
    color: "white",
    textTransform: "uppercase",
    cursor: "pointer",
    padding: "0.5rem",
  },
  logo_grid: {
    display: "flex",
    alignItems: "center",
    border: "none",
  },

  menu: {
    textTransform: "uppercase",
    textAlign: "right",
  },

  appbar: {
    backgroundColor: "#96261D",
    marginTop: "0px"
  },

  root: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#88301E",
  },

  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    minHeight: "100vh",
    width: "99vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  headerIcons: {
    color: "#fff",
    display: "flex",
    justifyContent: "right",
  },

  icons: {
    margin: "0.8rem",
    color: "#fff",
    fontSize: "2rem",
  },

  link: {
    display: "flex",
    fontSize: "18px",
    margin: "1rem",
    cursor: "pointer",
  },

  land_map_btn: {
    display: "flex",
    justifyContent: "end",
  },

  logo: {
    width: "60px",
    height: "60px",
  },
  navBarTextbtn: {
    padding: "0.5rem",
    borderRadius: "20px",
    fontFamily: "Ink Free",
    fontSize: "20px",
    cursor: "pointer",
    // width: "200px",
    // [theme.breakpoints.down("xs")]: {
    //   marginBottom: theme.spacing(2),
    //   width: "100px",
    // },
  },
}));
function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.containers}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            className={classes.g}
          >
            <Grid
              item
              xs={6}
              sm={5}
              md={8}
              lg={2}
              className={classes.logo_grid}
            >
              
            <Link to="/"> <img src="/images/logo.png" alt="#" className={classes.logo} /></Link>
              
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={4}>
              {/* NESTED GRID */}
              <>
                <Grid container justifyContent="flex-end" alignItems="center">
                  <Grid item xs={6} sm={6} md={4} lg={4} style={{width: "auto"}}>
                    {" "}
                  <Link to="/mint">  <button
                      className={classes.navBarTextbtn}
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   window.open(
                      //     "https://discord.com/invite/aUKY8zVQVg",
                      //     "_blank"
                      //   );
                      // }}
                    >
                      Mint Now
                    </button></Link>

                    
                  </Grid>
                  {/* <Grid item xs={6} sm={6} md={4} lg={4} style={{width: "auto"}}>
                  <Link to="/TreasureMap">  <button
                      className={classes.navBarTextbtn}
                    >
                      Treasure Map
                    </button></Link>
                    </Grid> */}
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    {" "}
                    <DrawerComponents />
                  </Grid>
                </Grid>

                
              </>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;

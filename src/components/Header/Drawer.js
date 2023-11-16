import React, { useState } from "react";
import { Drawer, IconButton, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import "./Drawer.css";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
  link: {
    // textDecoration: "none",
    color: "#fff",
    fontSize: "20px",
    padding: "1rem 2rem",
    cursor: "pointer",
    marginTop: "1rem",
    display: "block",
    textAlign: "center",
    fontFamily: "Ink Free",
  },

  icon: {
    color: "#fff",
    justifyContent: "flex-end",
  },
  headerIcons: {
    marginTop: "3rem",
  },

  logo_text: {
    fontFamily: "Ink Free",
  },

  header_div: {
    display: "flex",
    justifyContent: "space-between",
  },

  close_icon: {
    marginLeft: "4rem",
    marginTop: "2rem"
  },
  menuIcon: {
    fontSize: "40px"
  }
}));

function DrawerComponents() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer,] = useState(false);
  const [, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(() => setOpenDrawer(false));
  };

  return (
    <div>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className={classes.root}
      >
        <div className={classes.link}>
          <div className={classes.header_div}>
            <h3 className={classes.logo_text}>The Book of Gates</h3>
            <CloseIcon
              className={classes.close_icon}
              onClick={handleCloseNavMenu}
            />
          </div>

          <Link
            to="Development"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-30}
            duration={1000}
            className={classes.link}
            onClick={handleCloseNavMenu}
          >
            Development
          </Link>
          <Link
            to="Attributes"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-45}
            duration={1000}
            isDynamic={true}
            className={classes.link}
            onClick={handleCloseNavMenu}
          >
            Attributes
          </Link>
          <Link
            to="Creator"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-70}
            duration={1000}
            isDynamic={true}
            className={classes.link}
            onClick={handleCloseNavMenu}
          >
            Creator
          </Link>
          <Link
            to="Artifact Library"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-65}
            duration={1000}
            isDynamic={true}
            className={classes.link}
            onClick={handleCloseNavMenu}
          >
            Artifact Library
          </Link>
         
          <Link
            to="NFT Trading Game"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-95}
            duration={1000}
            isDynamic={true}
            className={classes.link}
            onClick={handleCloseNavMenu}
          >
            NFT Trading Game
          </Link>
          <Link
            to="Traits"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-95}
            duration={1000}
            isDynamic={true}
            className={classes.link}
            onClick={handleCloseNavMenu}
          >
            Traits
          </Link>
          <Link
            to="Roadmap"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-95}
            duration={1000}
            isDynamic={true}
            className={classes.link}
            onClick={handleCloseNavMenu}
          >
            Roadmap
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-95}
            duration={1000}
            isDynamic={true}
            className={classes.link}
            onClick={handleCloseNavMenu}
          >
            Contact
          </Link>

          <NavLink
            to="/TreasureMap"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-95}
            duration={1000}
            isDynamic={true}
            className={classes.link}
            onClick={handleCloseNavMenu}
          >
            Treasure Map
          </NavLink>

          

         
        </div>
        
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon className={classes.menuIcon}/>
      </IconButton>
    </div>
  );
}

export default DrawerComponents;

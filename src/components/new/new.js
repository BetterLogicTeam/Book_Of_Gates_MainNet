import { Grid, IconButton, Link } from "@material-ui/core";
import React from "react";
import { Fade } from "react-reveal";
import "./new.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import YouTube from "@material-ui/icons/YouTube";
import LanguageIcon from "@material-ui/icons/Language";

export default function TeamSecOne() {
  const style = {
    color: "#000",
  };
  return (
    <div className="root" id="Creator">
      <Fade right>
        <Grid container className="main-grid box_colmn">
          <Grid item xs={12} sm={12} md={5} lg={4} className="img">
            <img src="./assets/alex.jpg" alt="" className="popup" />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div className="main-div-style res_paddng">
              <h1 className="header" style={style}>
                Creator Alexander BlacK
              </h1>
              <p className="para" style={style}>
                Book of Gates was created by artist, writer and explorer
                Alexander Black, who has conducted research expeditions
                throughout Egypt and ancient Petra to unlock the ancient
                mysteries found in the Book of Gates. Alexander Black is also
                the host of an upcoming docuseries “Search for the Real
                Atlantis.”
                <br />
                <br /> Find Out More: <br />
              </p>
              <div className="icon_div">
                <a href="https://twitter.com/alexanderblack_" target="_blank">
                  <Twitter className="website_icon" />
                </a>
                <a
                  href="http://instagram.com/alexanderblackofficial/"
                  target="_blank"
                >
                  <InstagramIcon className="website_icon" />
                </a>
                <a href="http://alexanderblackpainting.com/" target="_blank">
                  <LanguageIcon className="website_icon" />
                </a>
                <a href="http://imdb.me/AlexanderBlack" target="_blank">
                  {" "}
                  <img
                    src="../assets/imdb.png"
                    alt=""
                    className="img_logo website_icon"
                  />{" "}
                </a>
                <a href="https://youtu.be/zm-c2kwofTw" target="_blank">
                  {" "}
                  <YouTube className="youtube_icon " />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

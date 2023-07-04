import { Grid } from "@material-ui/core";
import React from "react";
import { Fade } from "react-reveal";
import "./new-comp-three.css";
// import InstagramIcon from "@material-ui/icons/Instagram";

export default function NewCompThree() {
  return (
    <div className="root" id="Artifact Library">
      <Fade left>
        <Grid container className="main-grid box_colmn_rev">
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div className="main-div-style res_paddng">
              <h1 className="header">Artifact Library</h1>
              <p className="para">
                Find weapons, tools, potions, and sacred hieroglyphic spells to
                powerup Character NFTs in the Artifact Library.
                <br />
                <br /> The seven secret societies provide access to different
                Artifacts. Rarity of Character NFTs increase when paired with
                special Artifacts, creating the perfect combination of Character
                and Artifact.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} className="img">
            <img src="./assets/art.jpg" alt="#" className="popup" />
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

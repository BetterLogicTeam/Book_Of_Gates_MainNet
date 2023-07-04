import { Grid } from "@material-ui/core";
import React from "react";
import { Fade } from "react-reveal";
import "./new-comp-four.css";
import InstagramIcon from '@material-ui/icons/Instagram';

export default function NewCompFour() {
  const style = {
    color: '#000'
  }
  return (  
    <div className="root" id="NFT Trading Game">
          <Fade right>

      <Grid container className="main-grid box_colmn">
      <Grid item xs={12} sm={12} md={5} lg={4} className="img">
         <img src="./assets/Chamber.jpg" alt="#" className="popup"/>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <div className="main-div-style res_paddng">
          <h1 className="header" style={style}>NFT Trading Game</h1>
          <p className="para" style={style}>The Book of Gates Character NFT focus on utility to the Trading Game. After 100% 
community activation of the Character NFT, the Trading Game will be released. <br />
<br /> Players must own at least one Character NFT and Artifact NFT to play. The rankings of the Character NFT, its rarity and special characteristics, in 
combination with Artifact NFTs owned by the player, will determine the Character’s 
power. <br /> <br /> The Trading Game will allow both active trading of NFTs between owners, 
and also matches between players, similar to an NFT version of Magic: The 
Gathering.</p>
         </div>
         </Grid>
        </Grid>
      </Fade>
       </div>
     
       
  );
}








import { Grid, Button } from "@material-ui/core";

import React from "react";
import { Fade } from "react-reveal";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import MintBtn from "../secone/MintBtn";
import "./secthree.css";

// this section eight

function Secthree() {
  return (
    <div>
      <div className="secThree">
        <Grid container justifyContent="center">
          {/* <Grid item xs={12} lg={12} className="mint"> */}
          <MintBtn />
          {/* </Grid> */}
        </Grid>

        <Grid container>
          <Grid item lg={12} className="secThreeHeader" id="Development">
            <Fade bottom>
              <>
                <h1>Book of Gates NFT</h1>
                <p>
                The Book of Gates is a Graphic Novel and Trading Game of 10,008 Character
NFTs on Ethereum. Join the Treasure Hunt and mint a key that could unlock over 250 Eth
hiding in chests at every Gate! Mystery, adventure and high floor prices await!
                </p>
              </>
            </Fade>
          </Grid>
        </Grid>
      </div>
      <div className="secThreeText">
        <Grid container className="boxes box_colmn_sec">
          <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
              PUBLIC MINT
                {/* <span>10/27/2022</span> */}
              </h3>
              <p>
                Minting Now! Mint Price starts at just .02Eth for the first 100
                NFT!
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
              EVERY NFT IS A KEY
                {/* <span>10/28/2022</span> */}
              </h3>
              <p>
              Each character NFT is a key to unlock prizes on the Treasure Map!
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
              TREASURE MAP PRIZES
                {/* <span>TBA</span> */}
              </h3>
              <p>
              Eth Buy Backs, 1:1 Characters, Limited Covers, and the First EdiƟon Graphic Novel Vol. I.
              </p>
            </div>
          </Fade>

          <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
              BUY BACKS OF 272 ETH
                {/* <span>Dec. 2022</span> */}
              </h3>
              <p>
              Massive payouts to holders that list on Opensea.io at the Buy Back Price!
              </p>
            </div>
          </Fade>

          

          {/* <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
                NFT Trading Game <span>Jan. 2023</span>
              </h3>
              <p>
                Trade, collect and battle other NFT owners in the upcoming Book
                of Gates Trading Game.
              </p>
            </div>
          </Fade> */}

          {/* <Fade bottom>
            <div className="secThreeTextParas">
              <h3>
                Generation <span> 2 & 3 2023</span>
              </h3>
              <p>
                NFT owners will get WL on Alexander’s new projects, “Alice and
                the Red Queen” and “L.A. Detective Story”
              </p>
            </div>
          </Fade> */}
        </Grid>
      </div>
    </div>
  );
}

export default Secthree;

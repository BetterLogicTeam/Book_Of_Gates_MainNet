import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Fade } from "react-reveal";
// import "./new-comp.css";
import "../new-comp/new-comp.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
export default function NewComp() {
  const style = {
    // color: 'white',
    // fontSize: '25px'
  };
  return (
    <div className="root" id="Attributes">
      <Fade left>
        <Grid container className="main-grid box_colmn_rev">
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <div className="main-div-style res_paddng">
              <h1 className="header">NFT Attributes</h1>
              <p className="para">
                The Book of Gates Character NFTs derive from over 1.2 million
                attribute combinations from the stunning universe of the graphic
                novel. Each NFT will be a unique, randomly programed cell
                containing:
              </p>
              <h6 className="attributes_element">
                <FiberManualRecordIcon />{" "}
                <span className="newgrdain_icon"> Characters - </span> 28
                different character and creature design.
              </h6>
              <h6 className="attributes_element">
                <FiberManualRecordIcon />{" "}
                <span className="newgrdain_icon"> Orders – </span> 7 secret
                societies to belong to.
              </h6>
              <h6 className="attributes_element">
                <FiberManualRecordIcon />{" "}
                <span className="newgrdain_icon"> Gates - </span> Twelve Gates
                that represent the twelve hours of night.
              </h6>
              <h6 className="attributes_element">
                <FiberManualRecordIcon />{" "}
                <span className="newgrdain_icon"> Backgrounds – </span> Taken
                from the graphic novel.
              </h6>
              <h6 className="attributes_element">
                <FiberManualRecordIcon />{" "}
                <span className="newgrdain_icon"> Secret Codes –</span> Hidden
                throughout.
              </h6>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} className="img">
            <img
              src="./assets/MalthusWinchesterGate6 NFT.png"
              alt="#"
              className="popup"
            />
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

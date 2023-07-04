import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../RoadMap/roadmap.css";

import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  header: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: "3.5rem",
    paddingTop: "2rem",
    color: "#88301E",
    fontFamily: "Ink Free",
    fontWeight: "bold",
  },
  roadmap_para: {
    textAlign: "center",
    fontFamily: "Ink Free",
    fontSize: "35px",
    fontWeight: "bold",
    color: "#88301E",
    padding: "0px 30px",
  },
}));

function Rodmaap() {
  const classes = useStyle();
  return (
    <>
      <div className="roadmap-root" id="Roadmap">
        <Typography className={classes.header}>Roadmap</Typography>
        <h3 className={classes.roadmap_para}>
        Here’s what comes aŌer the Public Mint.
        </h3>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#88301E" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              ETH BUY BACKS
            </h1>
            <h3>
            272 Eth of NFTs will be bought from holders that list on Opensea.io at the Buy Price!
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#88301E" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              OGDOAD CHARACTERS
            </h1>
            <h3>
            Eight different 1:1 custom Ogdoad Characters will be airdropped to Treasure Hunt winners.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              LIMITED EDITION COVERS
            </h1>
            <h3>
            5 different limited‐ediƟon collecƟble covers will serve as Ɵckets to the Graphic Novel.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              BOOK OF GATES VOL. I
            </h1>
            <h3>
            The First EdiƟon Graphic Novel, Vol. I, will be released to all Treasure Hunt winners.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title">
               NFT Breeding
            </h1>
            <h3>
              The Artifact Library (NFT Breeding) is discovered. Initiates get
              the opportunity to buy Artifact NFTs that will equip the Character
              NFTs with weapons, powers and potions, for the upcoming Trading
              Game.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title">
            NFT TRADING GAME
            </h1>
            <h3>
            Trade, collect and baƩle other NFT holders in the upcoming Trading Plaƞorm.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title">
            PHASE 2
            </h1>
            <h3>
            Awesome NFT collecƟon with Buybacks of over $1,000,000! All Phase 1 Holders mint Phase
2 for .01Eth!
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {/* <div className="roadmap-root mt-4" id="Roadmap">
        <Typography className={classes.header}>
          The Character NFT Roadmap
        </Typography>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#88301E" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              <span>50% - </span>The Ogdoad Characters{" "}
            </h1>
            <h3>
            We release the Ogdoad. Eight Character NFTs of such rarity and power that only eight will be minted. The Ogdoad (tokens held back from the sale) are airdropped to random NFT owners.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#88301E" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              <span>80% - </span> Treasure Hunt
            </h1>
            <h3>
            The Great Hall opens beginning a treasure hunt. The first member of each Order to solve the mystery will be rewarded a Book of Gates Character NFT.
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#88301E",
              color: "#fff",
              borderRadius: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #88301E" }}
            iconStyle={{ background: "#88301E", color: "#fff" }}
          >
            <h1 className="vertical-timeline-element-title">
              {" "}
              <span>100% - </span> Phase 2
            </h1>
            <h3>
              After 100% activation of the Character NFT roadmap, Book of Gates
              will move to phase 2, including the Free NFT Breeding Program and
              the NFT Trading Game, allowing holders to trade, collect and
              battle with each other.
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div> */}
    </>
  );
}

export default Rodmaap;

import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import fromExponential from "from-exponential";
import { Button, makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
// import { VerticalAlignBottom } from "@material-ui/icons";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
  mint_main: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "green",
    // height: "500px",
    width: "100%",
  },
  mint_btn: {
    padding: "15px 25px",
    // margin: "15px 25px",
    border: "none",
    // width: "100%",
    borderRadius: "20px",
    backgroundColor: "#96261D",
    color: "#fff",
    position: "relative",
    bottom: "150px",
    // left: "42%",
    fontFamily: "ink free",
    fontSize: "1.3rem",
    cursor: "pointer",
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
      bottom: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
      bottom: "300px",
    },
  },
}));
const nowDate = Date.now();

function MintBtn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  console.log("blockchain", blockchain);
  const data = useSelector((state) => state.data);
  console.log("data=>", data);
  const [mint, setMint] = useState("");
  const [cost, setCost] = useState(0);
  const [maxMint, setMaxMint] = useState(0);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`connect your wallet and mint`);
  const [mintAmount, setMintAmount] = useState(1);
  // CONFIGRATION FILE INITIAL VALUES
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });
  const [snackState, setSnackState] = React.useState({
    state: false,
    severity: "",
    message: "",
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = snackState;
  console.log("CONTRACT ADDRESS", CONFIG.CONTRACT_ADDRESS);

  const handleWhiteListMintClick = () => {
    const currentTimeStamp = Math.floor(new Date().getTime() / 1000);
    if (currentTimeStamp >= 1666882800) {
      window.open("https://whitelist.bookofgatesofficial.com/", "_blank");
    } else {
      setSnackState({
        state: true,
        severity: "warning",
        message:
          "Mint not open yet. Please come back at 15:00 UTC on 10/27/2022",
        vertical: "top",
        horizontal: "center",
      });
    }
  };

  const handlePresaleMintClick = () => {
    const currentTimeStamp = Math.floor(new Date().getTime() / 1000);
    if (currentTimeStamp >= 1666969200) {
      window.open("https://presale.bookofgatesofficial.com/", "_blank");
    } else {
      setSnackState({
        state: true,
        severity: "warning",
        message:
          "Mint not open yet. Please come back at 15:00 UTC on 10/28/2022",
        vertical: "top",
        horizontal: "center",
      });
    }
  };

  const handleWaitListMintClick = () => {
    const currentTimeStamp = Math.floor(new Date().getTime() / 1000);
    if (currentTimeStamp >= 1667055600) {
      window.open("https://mint.bookofgatesofficial.com/", "_blank");
    } else {
      setSnackState({
        state: true,
        severity: "warning",
        message:
          "Mint not open yet. Please come back at 15:00 UTC on 10/29/2022",
        vertical: "top",
        horizontal: "center",
      });
    }
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      setSnackState({
        state: false,
        severity: "",
        message: "",
        vertical: "top",
        horizontal: "center",
      });

      setMintAmount(1);
      return;
    }

    setSnackState({
      state: false,
      severity: "",
      message: "",
      vertical: "top",
      horizontal: "center",
    });

    setMintAmount(1);
  };

  //CLAIM NFT FUNCTION
  const claimNFTs = () => {
    // costs
    let cost = Number(data.cost);
    let firstPreSaleCost = Number(data.firstPreSaleCost);
    let secondPreSaleCost = Number(data.secondPreSaleCost);
    let gasLimit = CONFIG.GAS_LIMIT;
    // cost wei
    let totalCostWei = cost * mintAmount;
    let totalCostWeiPreSaleFirst = firstPreSaleCost * mintAmount;
    let totalCostWeiPreSaleSecond = secondPreSaleCost * mintAmount;

    let totalGasLimit = String(gasLimit * mintAmount);
    // console logs
    console.log("Total WEICost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    console.log("minting date", mint);
    console.log("First presale cost ====>", firstPreSaleCost);
    console.log("Set max mint ====>", setMaxMint);
    console.log(
      "FIRST PRESALE END DATE ====>",
      typeof data.firstPreSaleEndDate
    );

    //
    // final costs
    const costFinal = String(fromExponential(totalCostWei));
    const firstPreSaleCostFinal = String(
      fromExponential(totalCostWeiPreSaleFirst)
    );
    const secondPreSaleCostFinal = String(
      fromExponential(totalCostWeiPreSaleSecond)
    );
    //
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    // eslint-disable-next-line no-lone-blocks

    if (mint == 1) {
      blockchain.smartContract.methods
        // FIRST PRESALE MINT
        .presaleMint(mintAmount, [])
        .send({
          gasLimit: totalGasLimit,
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: firstPreSaleCostFinal,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    } else if (mint == 2) {
      blockchain.smartContract.methods
        // SECOND PRESALE MINT
        .presaleMint(mintAmount, [])
        .send({
          gasLimit: totalGasLimit,
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: secondPreSaleCostFinal,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    } else {
      blockchain.smartContract.methods
        // PUBLIC MINT
        .mint(mintAmount)
        .send({
          gasLimit: totalGasLimit,
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: costFinal,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          dispatch(fetchData(blockchain.account));
        });
    }
  };
  // INCREMENT MINT AMOUNT FUNCTION
  const incrementMintAmount = () => {
    console.log("MAXMINT =>>>>>>", maxMint);
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > maxMint) {
      newMintAmount = maxMint;
    }
    setMintAmount(newMintAmount);
  };

  // DECREMENT MINT AMOUNT FUNCTION
  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      console.log("dispatch called...");

      dispatch(fetchData(blockchain.account));
    }
  };

  // CONFIG FILE FUNCTION
  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);
  //

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  useEffect(() => {
    const currentTime = Date.now();
    console.log("Currrent Time ====>", currentTime.toString());

    if (
      currentTime.toString() <= data.firstPreSaleEndDate &&
      currentTime.toString() > data.firstPreSaleDate
    ) {
      setMint(1);
      setMaxMint(Number(data.firstMaxMintAmountPresale));
    } else if (
      currentTime.toString() <= data.secondPreSaleEndDate &&
      currentTime.toString() > data.secondPreSaleDate
    ) {
      setMint(2);
      setMaxMint(Number(data.secondMaxMintAmountPresale));
    } else if (currentTime.toString() > data.secondPreSaleDate) {
      setMint(3);
      setMaxMint(Number(data.maxMintAmount));
    } else {
      console.log("not set");
    }
  }, [data]);
  return (
    // <div className={classes.mint_main}>
    //   <Button variant="contained">Hello</Button>
    // </div>

    <div className={classes.mint_main}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {/* <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Grid container justifyContent="center" alignItems="center">
                <a
                  variant="contained"
                  size="large"
                  className={classes.mint_btn}
                  onClick={handleWhiteListMintClick}
                  // href=" https://www.premint.xyz/book-of-gates-publicsale/"
                  target="blank"
                >
                  Whitelist Mint Now
                </a>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Grid container justifyContent="center" alignItems="center">
                <a
                  variant="contained"
                  size="large"
                  className={classes.mint_btn}
                  onClick={handlePresaleMintClick}
                  // href=" https://www.premint.xyz/book-of-gates-publicsale/"
                  target="blank"
                >
                  Presale Mint Now
                </a>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Grid container justifyContent="center" alignItems="center">
                <a
                  variant="contained"
                  size="large"
                  className={classes.mint_btn}
                  onClick={handleWaitListMintClick}
                  // href=" https://www.premint.xyz/book-of-gates-publicsale/"
                  target="blank"
                >
                  Waitlist Mint Now
                </a>
              </Grid>
            </Grid>
          </Grid> */}
          {/* <a
            variant="contained"
            size="large"
            className={classes.mint_btn}
            href="https://discord.gg/aUKY8zVQVg"
            target="blank"
          >
            Join Our Discord
          </a> */}
          {/* <a
            variant="contained"
            size="large"
            className={classes.mint_btn}
            href=" https://www.premint.xyz/book-of-gates-publicsale/"
            target="blank"
          >
            Join Presale Raffle
          </a> */}
          {/* {data.cost !== "" ? (
            // FIRST CONDITION
            <>
              {claimingNft ? (
                <>
                  <Grid container justifyContent="center">
                    <Grid xs={6} lg={12}>
                      <button className={classes.mint_btn}>
                        minting . . .
                      </button>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <div className={classes.minting_div}>
                  <div className={classes.mintingBtns}>
                    {nowDate.toString() < data.firstPreSaleDate ? (
                      <>
                        <a
                          variant="contained"
                          size="large"
                          className={classes.mint_btn}
                          href="https://discord.gg/aUKY8zVQVg"
                          target="blank"
                        >
                          Join Our Discord
                        </a>
                      </>
                    ) : (
                      <>
                        <button
                          variant="contained"
                          size="large"
                          className={classes.mint_btn}
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          -
                        </button>
                        <button
                          variant="contained"
                          size="large"
                          className={classes.mint_btn}
                          // disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                          }}
                        >
                          {claimingNft ? "minting" : "mint "}
                          {mintAmount}
                        </button>

                        <button
                          variant="contained"
                          size="large"
                          className={classes.mint_btn}
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        >
                          +
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            // SECOND CONDITION
            <>
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                // NESTED FIRST CONDITION

                <>
                  <div className={classes.mintingBtnTwo}>
                    <button
                      variant="contained"
                      size="large"
                      className={classes.mint_btn}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT WALLET
                    </button>
                  </div>
                </>
              ) : (
                // NESTED SECOND CONDITION
                <button
                  variant="contained"
                  size="large"
                  className={classes.mint_btn}
                >
                  CONNECTING . . .
                </button>
              )}
            </>
          )} */}
        </Grid>
      </Grid>
      <Snackbar
        open={snackState.state}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        message="Note archived"
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}

        //action={action}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={snackState.severity}
          sx={{ width: "100%" }}
        >
          {snackState.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MintBtn;

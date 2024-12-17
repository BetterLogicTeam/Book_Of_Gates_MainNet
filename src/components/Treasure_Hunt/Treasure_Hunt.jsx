import React from "react";
import "./Treasure_Hunt.css";
import { useLocation, useNavigate } from "react-router-dom";
import Web3 from "web3";
import { NFT_Contract, NFT_Contract_ABI } from "../../utils/Contract";
import { loadWeb3 } from "../../apis/api";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "antd";
import With_coins from "../../assets/Final-(-No-coins).gif";
import NoCoin from "../../assets/NoCoin.mp4";
import WithCoin from "../../assets/WithCoin.mp4";

import { useRef } from "react";
import { toast } from "react-toastify";
import Countdown from "react-countdown";
import { getRendomNumber } from "../../helper/RendomNumber";

const CharacterNFT = [39, 49, 50, 71, 9, 88, 21, 69];

export default function Treasure_Hunt() {
  let history = useLocation();
  const videoRef = useRef(null);

  const [Array_NFT, setArray_NFT] = useState([]);
  const [maxsupply, setmaxsupply] = useState("--");
  const [totalsupply, settotalsupply] = useState(0);
  const [Threshold, setThreshold] = useState("--");
  const [NFTmintedPercentce, setNFTmintedPercent] = useState("--");
  const [publicSaleDate, setpublicSaleDate] = useState("--");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [random_Number, setrandom_Number] = useState(0);
  const [checkUser, setcheckUser] = useState(true);
  const [spinner, setspinner] = useState(false);
  const [getDetails, setgetDetails] = useState([]);
  const [status, setstatus] = useState("");

  // console.log("history.state.number", getDetails);

  let navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let Data_Array = [];
  const ShowCollection = async () => {
    try {
      const webSupply = new Web3("https://bsc-testnet.public.blastapi.io");

      const web3 = window.web3;
      let contractOf = new webSupply.eth.Contract(
        NFT_Contract_ABI,
        NFT_Contract
      );

      let acc = await loadWeb3();
      if (acc) {
        let res = await axios.get(
          `https://server.bookofgatesofficial.com/Get_Details?user_address=${acc}`
        );
        // console.log("Get_data", res?.data);
        if (res?.data?.success) {
          setgetDetails(res?.data?.data);
          setcheckUser(true);
        } else {
          setcheckUser(false);
        }
        let WalletOwnOf = await contractOf.methods.walletOfOwner(acc).call();
        let wallet_Length = WalletOwnOf.length;
        // console.log("collection", WalletOwnOf);
        let Wallet_URI;
        for (let i = 0; i < wallet_Length; i++) {
          // console.log("WalletOwnOf", i);
          let ArryData = WalletOwnOf[i];
          // let ArryData = i

          // Wallet_URI = await axios.get(
          //   `https://teal-high-elephant-254.mypinata.cloud/ipfs/QmRN9mG46UtACjCmtwjnqz2pmDei2tUP6zB23NpFw8wk8C/${WalletOwnOf[i]}.png`
          // );
          Wallet_URI = await axios.get(
            `https://red-tiny-piranha-757.mypinata.cloud/ipfs/QmZ1Cqx3sXZvtxtVjBpzUjQZw3hAzEGo8zwxrroQ9dpe29/${WalletOwnOf[i]}.png`
          );

          let Image_Url = Wallet_URI.config.url;
          // let NFT_Name = res.data.title

          Data_Array = [
            ...Data_Array,
            { Url: Image_Url, address: acc, ArryData: ArryData },
          ];
          setArray_NFT(Data_Array);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getdata = async () => {
    try {
      const web3 = window.web3;
      const acc = await loadWeb3();

      let contractOf = new web3.eth.Contract(NFT_Contract_ABI, NFT_Contract);
      let getmaxsupply = await contractOf.methods.maxSupply().call();
      let gettotalsupply = await contractOf.methods.totalSupply().call();
      let publicSaleDate = await contractOf.methods.publicSaleDate().call();
      // console.log("gettotalsupply", gettotalsupply);
      // let price = await contractOf.methods.cost().call();

      if (Number(gettotalsupply) <= Number(100)) {
        setThreshold("11");
      } else if (Number(gettotalsupply) <= Number(300)) {
        setThreshold("2");
      } else if (Number(gettotalsupply) <= Number(600)) {
        setThreshold("3");
      } else if (Number(gettotalsupply) <= Number(1000)) {
        setThreshold("4");
      } else if (Number(gettotalsupply) <= Number(1500)) {
        setThreshold("5");
      } else if (Number(gettotalsupply) <= Number(2500)) {
        setThreshold("6");
      } else if (Number(gettotalsupply) <= Number(3500)) {
        setThreshold("7");
      } else if (Number(gettotalsupply) <= Number(4500)) {
        setThreshold("8");
      } else if (Number(gettotalsupply) <= Number(5500)) {
        setThreshold("9");
      } else if (Number(gettotalsupply) <= Number(6500)) {
        setThreshold("10");
      } else if (Number(gettotalsupply) <= Number(8000)) {
        setThreshold("11");
      } else if (Number(gettotalsupply) > Number(8000)) {
        setThreshold("12");
      }

      let nftpercent = ((gettotalsupply / getmaxsupply) * 100).toFixed(4);
      // price = web3.utils.fromWei(price);
      // price = Number(price).toFixed(4);

      setmaxsupply(getmaxsupply);
      settotalsupply(gettotalsupply);
      setNFTmintedPercent(nftpercent);
      setpublicSaleDate(publicSaleDate);
      // setprice(price);
    } catch (error) {
      console.log("Error While Calling Mint Function", error);
    }
  };

  useEffect(() => {
    ShowCollection();

    getdata();
  }, []);

  function getRandomInt(max) {
    let number = Math.floor(Math.random() * max);
    // console.log("number", number);
    setrandom_Number(number);
  }

  useEffect(() => {
    const videoElement = videoRef.current;
    const timeoutId = setTimeout(() => {
      if (videoElement) {
        videoElement.pause();
      }
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isModalOpen]);

  const WinnerReward = async () => {
    try {
      let acc = await loadWeb3();
      setspinner(true);
      const statusPayloadMap = {
        BuyBackReward: { BuyBackReward: true },
        CharacterNFT: { CharacterNFT: 1 },
        LimitedEditioncovers: { LimitedEditioncovers: true },
        GraphicNovel: { GraphicNovel: 1 },
      };

      const payload = statusPayloadMap[status] || {};
      // console.log("status", status);
      if (Object.keys(payload).length > 0) {
        try {
          const res = await axios.post(
            "https://server.bookofgatesofficial.com/AddRewardRecorder",
            {
              user_address: acc,
              Gate_No: history.state?.data,
              type: status,
              ...payload,
            }
          );
          // Optionally handle the response here
        } catch (error) {
          console.error("Error posting reward data:", error);
        }
      }

      handleCancel();
      setspinner(false);
      navigate("/TreasureMap");
    } catch (error) {
      console.log(error);
    }
  };

  const Losser = async (check) => {
    try {
      let acc = await loadWeb3();
      setspinner(true);
      let res = await axios.post("https://server.bookofgatesofficial.com/AddRewardRecorder", {
        user_address: acc,
        Gate_No: history.state?.data,
        GraphicNovel: 1,
        type: status,
      });
      // console.log("NFT", res.data);
      handleCancel();
      setspinner(false);
    } catch (error) {
      setspinner(false);
      console.log(error);
    }
  };

  const Completionist = () => <span>Expired</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {days}DAYS: {hours}HOURS: {minutes}MIN: {seconds}SEC
        </span>
      );
    }
  };

  const showChestResult = async () => {
    try {
      // console.log("Tayyab",getDetails?.BuyBackReward,(getDetails?.BuyBackReward==true && (Number(history?.state?.number) == 11)))
      let sumNumer = Number(history?.state?.number) + Number("8");
      if (
        getDetails?.BuyBackReward == false &&
        Number(history?.state?.number) == getRendomNumber(100)
      ) {
        setstatus("BuyBackReward");
      } else if (
        getDetails?.LimitedEditioncovers == false &&
        Number(sumNumer) == getRendomNumber(150)
      ) {
        setstatus("LimitedEditioncovers");
      } else if (
        getDetails?.CharacterNFT <= 2 &&
        Number(sumNumer + Number(3)) == getRendomNumber(totalsupply)
      ) {
        setstatus("CharacterNFT");
      } else {
        setstatus("GraphicNovel");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="treasure_main_page_here">
      <div className="Treasure_Hunt_header_main">
        <div className="hunter_treasure_bg">
          <div className="container">
            <div className="play_header text_hunt">
              <h1>Treasure Chest</h1>
              {/* <p>Your NFT could open the Chest</p> */}
              {/* <p className="black_header_text_p text-white">
              <Countdown
                date={new Date("2024-02-02T00:00:00")}
                renderer={renderer}
              />
            </p> */}
            </div>
            <div className="d-flex justify-content-center">
              <img src={history.state.src} alt="" />
            </div>
            <div className="Luck_div">
              <button
                className="btn_luck mt-5"
                // disabled={checkUser}
                onClick={() =>
                  history.state.gate == "Close"
                    ? toast.error("Gate is Closed!")
                    : checkUser
                    ? (showModal(), showChestResult())
                    : toast.error("Sorry! You already try your luck")
                }
              >
                Open Chest
              </button>
            </div>
            <div className=" play_header d-flex justify-content-center">
              <p style={{ color: "#88301E", fontSize: "3rem" }}>
                Gate Status : {history.state.gate}
                {/* {Number(Threshold) > Number(history.state.data)
                ? "Open"
                : "Close"} */}
              </p>
              <p style={{ color: "#88301E", fontSize: "2.5rem" }} id="botttom">
                This Gate will open when 100 NFTs have minted.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="play_header">
            <h1>How to Play</h1>
            {/* <p> Your NFT could open the Chest</p> */}
          </div>
          <div className="play_count_main main_vala">
            <div className="container">
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="play_count one_vala">
                    <span className="play_span">1</span>
                    <span className="fs-4 mint_nft ms-2">Mint an NFT</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="play_count">
                    <span className="play_span">3</span>
                    <span className="play_span_2 ms-2">
                      Click to Open Chest. If you find Gold,
                    </span>
                    <br />
                    <span className="play_span_2 mgin_fv">
                      we buy your NFT at the Buy Price!
                    </span>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="play_count scnd_vala">
                    <span className="play_span">2</span>
                    <span className="play_span_2 ms-2">
                      List on{" "}
                      <a
                        href="https://blur.io/"
                        className="text-white"
                        target="_blank"
                      >
                        Blur.io
                      </a>{" "}
                      at the
                    </span>
                    <br />
                    <span className="play_span_2 mgin_fv"> Buy Price</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="play_count chotha_vala">
                    <span className="play_span ">4</span>
                    <span className="play_span_2 ms-2">
                      Your NFT is the key. Try all your NFTs
                    </span>
                    <br />
                    <span className="play_span_2 mgin_fv">
                      on all 12 Chests!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {Array_NFT.map((items, index) => {
                return (
                  <>
                    <div className="col-lg-3 mt-2">
                      <div className="game-item">
                        <div class="game-inner">
                          <img
                            src={items.Url}
                            alt="NFT"
                            style={{ zIndex: "100000" }}
                            className="image"
                          />
                          <div class="game-item__content">
                            <h4 class="title"> Token ID: {items.ArryData}</h4>
                          </div>
                        </div>
                        {/* <div class="mask"> </div>
                        <div class="ball"> </div> */}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Modal
        title=""
        open={isModalOpen}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {status == "BuyBackReward" ||
        status == "CharacterNFT" ||
        status == "LimitedEditioncovers" ? (
          <>
            <video
              style={{ width: "30rem" }}
              ref={videoRef}
              height="400"
              autoPlay
              controls
              loop
            >
              <source src={WithCoin} type="video/mp4" />
            </video>
            <div className="btn_Fotter_a">
              <button className="btn" onClick={() => WinnerReward()}>
                {spinner
                  ? "Loading..."
                  : status == "BuyBackReward"
                  ? "Buy Back Reward"
                  : status == "CharacterNFT"
                  ? "Character NFT"
                  : status == "LimitedEditioncovers"
                  ? "Limited Edition Covers"
                  : ""}
              </button>
            </div>
          </>
        ) : (
          <>
            <video
              className="noCoin_video_here"
              ref={videoRef}
              height="350"
              autoPlay
              controls
              loop
            >
              <source src={NoCoin} type="video/mp4" />
            </video>
            <div className="btn_Fotter_a">
              {/* <button className="btn" onClick={() => Losser("PDF")}>
                <a
                  href="./Comic.pdf"
                  download="./Comic.pdf"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {spinner ? "Loading..." : "  Download Comics PDF"}
                </a>
              </button> */}
              <button className="btn" onClick={() => Losser("NFT")}>
                {spinner
                  ? "Loading..."
                  : status == "GraphicNovel" && "Graphic Novel"}
              </button>
            </div>
          </>
        )}

        {/* <img src={With_coins} alt=""  /> */}
      </Modal>
    </div>
  );
}

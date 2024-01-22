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

export default function Treasure_Hunt() {
  let history = useLocation();
  const videoRef = useRef(null);

  const [Array_NFT, setArray_NFT] = useState([]);
  const [maxsupply, setmaxsupply] = useState("--");
  const [totalsupply, settotalsupply] = useState("--");
  const [Threshold, setThreshold] = useState("--");
  const [NFTmintedPercentce, setNFTmintedPercent] = useState("--");
  const [publicSaleDate, setpublicSaleDate] = useState("--");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [random_Number, setrandom_Number] = useState(0);
  const [checkUser, setcheckUser] = useState(true);
  const [spinner, setspinner] = useState(false);

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

  const Winner = async () => {
    try {
      let acc = await loadWeb3();
      setspinner(true);
      let res = await axios.post(
        "https://gate.womenempowerment.online/add_Gate_User",
        {
          user_address: acc,
          Iswinner: true,
          IsfreeNFT: false,
          IsPDF: false,
        }
      );
      // console.log("NFT", res.data);
      if (res.data.success == true) {
        let GateRes = await axios.post(
          "https://gate.womenempowerment.online/add_Gate_details",
          {
            Gate_No: history.state.data,
            Gate_status: true,
          }
        );
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
      if (check == "NFT") {
        setspinner(true);
        let res = await axios.post(
          "https://gate.womenempowerment.online/add_Gate_User",
          {
            user_address: acc,
            Iswinner: false,
            IsfreeNFT: true,
            IsPDF: false,
          }
        );
        // console.log("NFT", res.data);
        handleCancel();
        setspinner(false);
      } else {
        setspinner(true);

        let res = await axios.post(
          "https://gate.womenempowerment.online/add_Gate_User",
          {
            user_address: acc,
            Iswinner: false,
            IsfreeNFT: false,
            IsPDF: true,
          }
        );
        // console.log("PDF", res.data);
        handleCancel();
        setspinner(false);
      }
    } catch (error) {
      setspinner(false);
      console.log(error);
    }
  };

  const get_user_data = async () => {
    try {
      let acc = await loadWeb3();
      let res = await axios.get(
        `https://gate.womenempowerment.online/Get_One_User?user_address=${acc}`
      );
      // console.log("Get_data", res?.data);
      if (res?.data?.success) {
        setcheckUser(true);
      } else {
        setcheckUser(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_user_data();
  }, [spinner, checkUser]);
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

  return (
    <div>
      <div className="Treasure_Hunt_header_main">
        <div className="container">
          <div className="play_header">
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
                      ? (showModal(), getRandomInt(100))
                      : toast.error("Sorry! You already try your luck")
                  }
                >
                  Open Chest
                </button>
              </div>
          <div className=" play_header d-flex justify-content-center">
            <p>
              Gate Status : {history.state.gate}
              {/* {Number(Threshold) > Number(history.state.data)
                ? "Open"
                : "Close"} */}
            </p>
            <p>This Gate will open when 100 NFTs have minted.</p>
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
        {Number(history.state.number) == Number(random_Number) ? (
          <>
            <video
              style={{ width: "30rem" }}
              ref={videoRef}
              height="400"
              autoPlay
              controls={false}
            >
              <source src={WithCoin} type="video/mp4" />
            </video>
            <div className="btn_Fotter_a">
              <button className="btn" onClick={() => Winner()}>
                {spinner ? "Loading..." : "   Get Reward"}
              </button>
            </div>
          </>
        ) : (
          <>
            <video
              style={{ width: "30rem" }}
              ref={videoRef}
              height="350"
              autoPlay
              controls={false}
            >
              <source src={NoCoin} type="video/mp4" />
            </video>
            <div className="btn_Fotter_a">
              <button className="btn" onClick={() => Losser("PDF")}>
                <a
                  href="./Comic.pdf"
                  download="./Comic.pdf"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {spinner ? "Loading..." : "  Download Comics PDF"}
                </a>
              </button>
              <button className="btn" onClick={() => Losser("NFT")}>
                {spinner ? "Loading..." : "   Get Free NFT"}
              </button>
            </div>
          </>
        )}

        {/* <img src={With_coins} alt=""  /> */}
      </Modal>
    </div>
  );
}

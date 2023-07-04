import React, { useState } from "react";
import { useEffect } from "react";
import { loadWeb3 } from "../../apis/api";
import { NFT_Contract, NFT_Contract_ABI } from "../../utils/Contract";
import Mint_modal from "../Mint_modal/Mint_modal";
import "./Mint.css";
import Countdown from "react-countdown";
import { toast } from "react-toastify";
import { Fade } from "react-reveal";
import { Box } from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import { Link } from "react-scroll";
import Web3 from "web3";

function Mint() {
  const [Owner_Address, setOwner_Address] = React.useState("");
  const [data, setData] = useState(false);
  const [Connect_wallet1, setConnect_wallet1] = useState("Connnect Wallet");
  const [maxsupply, setmaxsupply] = useState("--");
  const [totalsupply, settotalsupply] = useState("--");
  const [Threshold, setThreshold] = useState("--");
  const [price, setprice] = useState("--");
  const [NFTmintedPercentce, setNFTmintedPercent] = useState("--");
  const [publicSaleDate, setpublicSaleDate] = useState("--");
  const [refAddress, setRefAddress] = useState("");
  const [copied, setCopied] = useState(false);
  const [Address, setAddress] = useState("");

  const [count, setcount] = useState(1);
  const handle_number = () => {
    // alert("helo")

    setcount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  };
  const handle_pluse = () => {
    if (count <= 9)
      // alert("helo")

      setcount(count + 1);
  };

  const Connect_Wallet = async () => {
    try {
      const webSupply = new Web3("https://eth-mainnet-public.unifra.io");

      const web3 = window.web3;
      let contractOf = new webSupply.eth.Contract(
        NFT_Contract_ABI,
        NFT_Contract
      );
      let Owner = await contractOf.methods.owner().call();
      console.log("Owner", Owner);
      setOwner_Address(Owner);
      let acc = await loadWeb3();
      setConnect_wallet1(acc);
      setAddress(acc);
      setData(true);
      getdata(acc);
    } catch (e) {
      console.log("Error While calling Connect Wallet fuction", e);
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
      let price = await contractOf.methods.cost().call();

      if (Number(gettotalsupply) <= Number(100)) {
        setThreshold("1");
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
      price = web3.utils.fromWei(price);
      price = Number(price).toFixed(4);

      setmaxsupply(getmaxsupply);
      settotalsupply(gettotalsupply);
      setNFTmintedPercent(nftpercent);
      setpublicSaleDate(publicSaleDate);
      setprice(price);
    } catch (error) {
      console.log("Error While Calling Mint Function", error);
    }
  };

  const Mint_Nft = async () => {
    try {
      const web3 = window.web3;
      const acc = await loadWeb3();

      let ethbalance = await web3.eth.getBalance(acc);
      let contractOf = new web3.eth.Contract(NFT_Contract_ABI, NFT_Contract);
      let getValue = await contractOf.methods.cost().call();
      let publicSaleDate = await contractOf.methods.publicSaleDate().call();
      let gettotalsupply = await contractOf.methods.totalSupply().call();
      let getmaxsupply = await contractOf.methods.maxSupply().call();
      let getmaxMintAmount = await contractOf.methods.maxMintAmount().call();

      let newtotal = gettotalsupply + count;

      getValue = web3.utils.fromWei(getValue.toString());
      // console.log("refferal",getValue);
      let Value = Number(getValue * count);
      Value = web3.utils.toWei(Value.toString());
      console.log("web3.utils", Value);
      const now = Math.floor(new Date().getTime() / 1000.0);

      if (Number(now) >= Number(publicSaleDate)) {
        if (Number(newtotal) <= Number(getmaxsupply)) {
          if (Number(ethbalance) >= Number(Value)) {
            if (Number(count) <= Number(getmaxMintAmount)) {
              if (window.location.href.includes("ref")) {
                let UserID = window.location.href.split("=");
                UserID = UserID[UserID.length - 1];

                let response = await axios.post('https://refferal.bookofgatesofficial.com/Get_Refferal_Address',{
                  userName:UserID
                })
                console.log("response",response.data.data);
                

                console.log("refferal",UserID);
                let res = await axios.get(
                  `https://refferal.bookofgatesofficial.com/Get_Refferal_record?Refferal=${response.data.data}`
                );
                if (res.data.success == true) {
                  await contractOf.methods.mint(count).send({
                    from: acc,
                    value: Value,
                  });
                  toast.success("Minted Successfully");

                  let Add_Refferal = await axios.post(
                    `https://refferal.bookofgatesofficial.com/Add_Refferal_record`,
                    {
                      Refferal: acc,
                    }
                  );

                  toast.success(Add_Refferal.data.msg);

                  let Add_Refferal_Record = await axios.post(
                    "https://refferal.bookofgatesofficial.com/Add_Refferal_data",
                    {
                      Refferal_Address: response.data.data,
                      Minter_Address: acc,
                      Mint_Price: Value,
                      Mint_Value: count,
                    }
                  );
                  toast.success(Add_Refferal_Record.data.msg);
                } else {
                  toast.error(res.data.msg);
                }
              } else {
                await contractOf.methods.mint(count).send({
                  from: acc,
                  value: Value,
                });
                toast.success("Minted Successfully");

                let Add_Refferal = await axios.post(
                  `https://refferal.bookofgatesofficial.com/Add_Refferal_record`,
                  {
                    Refferal: acc,
                  }
                );

                toast.success(Add_Refferal.data.msg);

                let Add_Refferal_Record = await axios.post(
                  "https://refferal.bookofgatesofficial.com/Add_Refferal_data",
                  {
                    Refferal_Address: acc,
                    Minter_Address: acc,
                    Mint_Price: Value,
                    Mint_Value: count,
                  }
                );
                toast.success(Add_Refferal_Record.data.msg);
              }
            } else {
              toast.error("Can't Mint");
            }
          } else {
            toast.error("Insufficient Funds for Minting!");
          }
        } else {
          toast.error("Max Mint Reached!");
        }
      } else {
        toast.error("Public Sale Not Started Yet!");
      }
    } catch (error) {
      console.log("Error While Calling Mint Function", error);
    }
  };

  const Completionist = () => {
    return (
      <>
        <div className="text_days fs-5 ">Public Sale Started</div>
      </>
    );
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="text_days fs-5 ">
          Time remaining to lock in Double Rewards {days} Days {hours} Hours{" "}
          {minutes} Minutes {seconds} Seconds
          {/* {days} D {hours} H {minutes} M {seconds} S */}
        </div>
      );
    }
  };

  useEffect(() => {
    if (Connect_wallet1.startsWith("0x")) {
      setRefAddress(`${window.location.origin}/mint/?ref=${Connect_wallet1}`);
    } else {
      setRefAddress("Connect wallet");
    }
  }, [Connect_wallet1]);

  return (
    <div className="">
      <div className="mint_main">
        <div class="main_home_land_bg">
          <div class="css-diro6f ant-app">
            <div class="container ">
              <div class="text-left" style={{ textAlign: "end" }}></div>
              <Fade bottom>
                <Box class="row " sx={{ display: { xs: "block", sm: "flex" } }}>
                  <div class="col-md-6 left_connent text-start">
                    <h1 class="main_home_heading1 text-white">
                      Public Sale Book of Gates NFT
                    </h1>
                    <p class="home_land_para1  text-white">
                      The Book of Gates is a Graphic Novel and Trading Game of
                      10,008 Character NFTs on Ethereum. Join the Treasure Hunt
                      and mint a key that could unlock over 250 Eth hiding in
                      chests at every Gate! Mystery, adventure and high floor
                      prices await!
                    </p>
                    <div>
                      {/* <div class="refferal_card">
                        <h4 class="card_heading_span pt-3">Refferal Address</h4>

                        <div class=" copy_refferal_address mt-3">
                          <input
                            type="text"
                            className="Refferal_input"
                            value={refAddress}
                          />
                          
                          <CopyToClipboard
                            text={refAddress}
                            onCopy={() => {
                              setCopied(true);
                              setTimeout(() => {
                                setCopied(false);
                              }, 2000);
                            }}
                          >
                            <button className=" btn clr copy_btn mt-3">
                              {copied ? "Copied!" : "Copy Referral"}
                            </button>
                          </CopyToClipboard>

                       

                    
                          {Connect_wallet.startsWith("0x") && (
                            <>
                              {Owner_Address === Address ? (
                                <>
                                  <a
                                    href="/Admin_Refferal_details"
                                    className=" btn clr copy_btn mt-3"
                                  >
                                    Admin Refferal info
                                  </a>
                                </>
                              ) : (
                                <>
                                  <a
                                    href="/Refferal_Info"
                                    className=" btn clr copy_btn mt-3"
                                  >
                                    Refferal Details
                                  </a>
                                </>
                              )}
                            </>
                          )}
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <div class="col-md-6 right_coonent mt-5 mt-md-0">
                    <div class="right_content_card">
                      <h4 class="card_heading_span pt-3">Public Sale</h4>
                      <div className="text_days fs-5 ">
                        <Countdown
                          date={
                            Date.now() +
                            (parseInt("1680225535") * 1000 - Date.now())
                          }
                          renderer={renderer}
                        />
                      </div>
                      {/* <div class="text_days fs-5 ">
                      <div class="text_days fs-5 ">Presale Started</div>
                    </div> */}
                      <div class="progress_bar_nav mt-3">
                        <h4 class="progress_number">
                          {NFTmintedPercentce}% SOLD
                        </h4>
                        <div className="lower_pro d-flex">
                          <div
                            className="upper_pro"
                            style={{ "--width": `${NFTmintedPercentce}%` }}
                          ></div>
                        </div>
                        <div class="usdt_contntet text-white text-bold">
                          <span>
                            SOLD {totalsupply} /Total {maxsupply}
                          </span>
                          <br />
                          <span>
                            Gate: {Threshold}
                            <br />
                          </span>
                          <span>Price: {price}</span>
                        </div>
                        <div class="box_text text-white">
                          <span>
                            Mint before clock expires and Buyback DOUBLES! Over
                            250 Eth in Buybacks
                          </span>
                        </div>

                        <div className="d-flex justify-content-center pt-3">
                          <div className="flex main_bg_clt rounded w-50">
                            <button
                              className="clr increament_btn"
                              onClick={handle_number}
                            >
                              {" "}
                              -
                            </button>
                            <span className="clr numbr_here">{count}</span>
                            <button
                              className="clr increament_btn"
                              onClick={handle_pluse}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div class="d-flex justify-content-center my-4">
                          {data == false ? (
                            <>
                              <button
                                _ngcontent-bhd-c59=""
                                class="btn btn-eth crypto-btn my-1 py-2 px-1 w-80 my-2"
                                onClick={() => Connect_Wallet()}
                              >
                                <img
                                  _ngcontent-bhd-c59=""
                                  src="https://arc-coin-presale.netlify.app/static/media/metamask.79992a9b.png"
                                  height="10"
                                />
                                <span
                                  _ngcontent-bhd-c59=""
                                 
                                >
                                  CONNECT WALLET
                                </span>
                              </button>
                            </>
                          ) : (
                            <>
                              <div className="">
                                <button
                                  _ngcontent-bhd-c59=""
                                  class="btn btn-eth crypto-btn my-1 py-2 px-1 w-80 my-2"
                                  onClick={() => Mint_Nft()}
                                >
                                  <img
                                    _ngcontent-bhd-c59=""
                                    src="https://arc-coin-presale.netlify.app/static/media/metamask.79992a9b.png"
                                    height="10"
                                  />
                                  <span _ngcontent-bhd-c59="">Mint Now</span>
                                </button>
                              </div>

                              {/* <Mint_modal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                            /> */}
                            </>
                          )}
                        </div>
                        {/* <div class="new_btn text-white">
                        <p>
                          {" "}
                          <a
                            href="https://www.youtube.com/watch?v=B8CbDQQyBV8"
                            class="text-white"
                          >
                            {" "}
                            How to Buy{" "}
                          </a>
                        </p>
                        <p>
                          {" "}
                          <a
                            href="https://www.youtube.com/watch?v=B8CbDQQyBV8"
                            class="text-white"
                          >
                            {" "}
                            New to Crypto?
                          </a>{" "}
                        </p>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </Box>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;

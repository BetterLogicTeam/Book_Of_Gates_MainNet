import React, { useState } from "react";
import { useEffect } from "react";
import { loadWeb3 } from "../../apis/api";
import { NFT_Contract, NFT_Contract_ABI } from "../../utils/Contract";
import Mint_modal from "../Mint_modal/Mint_modal";
import "./presale.css";
import Countdown from "react-countdown";
import { toast } from "react-toastify";
function Presale() {

  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState(false);
  const [Connect_wallet, setConnect_wallet] = useState("Connnect Wallet");
  const [maxsupply, setmaxsupply] = useState("--");
  const [totalsupply, settotalsupply] = useState("--");
  const [NFTmintedPercentce, setNFTmintedPercent] = useState("--");
  const [publicSaleDate, setpublicSaleDate] = useState("--");






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
  }
  const handle_pluse = () => {
    if (count <= 9)
      // alert("helo")

      setcount(count + 1)
  }


  const Connect_Wallet = async () => {
    try {
      let acc = await loadWeb3();
      setConnect_wallet(acc)
      setData(true)
      getdata(acc)

    } catch (e) {
      console.log("Error While calling Connect Wallet fuction", e);
    }
  }
  const getdata = async () => {
    try {
      const web3 = window.web3
      const acc = await loadWeb3()

      let contractOf = new web3.eth.Contract(NFT_Contract_ABI, NFT_Contract)
      let getmaxsupply = await contractOf.methods.maxSupply().call()
      let gettotalsupply = await contractOf.methods.totalSupply().call()
      let publicSaleDate = await contractOf.methods.publicSaleDate().call()



      let nftpercent = (gettotalsupply / getmaxsupply * 100).toFixed(4)




      setmaxsupply(getmaxsupply);
      settotalsupply(gettotalsupply);
      setNFTmintedPercent(nftpercent);
      setpublicSaleDate(publicSaleDate);

    } catch (error) {
      console.log("Error While Calling Mint Function", error);
    }
  }



  const Mint_Nft = async () => {
    try {
      const web3 = window.web3
      const acc = await loadWeb3()
      let ethbalance = await web3.eth.getBalance(acc);
      let contractOf = new web3.eth.Contract(NFT_Contract_ABI, NFT_Contract)
      let getValue = await contractOf.methods.secondPreSaleCost().call()
      let publicSaleDate = await contractOf.methods.publicSaleDate().call()
      let gettotalsupply = await contractOf.methods.totalSupply().call()
      let getmaxsupply = await contractOf.methods.maxSupply().call()
      let getsecondMaxMintAmountPresale = await contractOf.methods.secondMaxMintAmountPresale().call()

      let newtotal = gettotalsupply + count;

      getValue = web3.utils.fromWei(getValue)
      let Value = Number(getValue * count)
      Value = web3.utils.toWei(Value.toString())
      console.log("web3.utils", Value);
      const now = Math.floor(new Date().getTime() / 1000.0)


      if (Number(now) < Number(publicSaleDate)) {
        if (Number(newtotal) <= Number(getmaxsupply)) {
          if (Number(ethbalance) >= Number(Value)) {
            if (Number(count) <= Number(getsecondMaxMintAmountPresale)) {

              await contractOf.methods.presaleMint(count).send(
                {
                  from: acc,
                  value: Value
                }
              )
              toast.success("Minted Successfully")

            } else {
              toast.error("Can't Mint")
            }
          } else {
            toast.error("Insufficient Funds for Minting!")
          }
        }

        else {
          toast.error("Max Mint Reached!")
        }
      }

      else {
        toast.error('Public Sale Not Started Yet!')
      }


    } catch (error) {
      console.log("Error While Calling Mint Function", error);
    }
  }



  const Completionist = () => {
    return (
      <>
        <div className="text_days fs-5 ">Presale Started</div>
      </>
    );
  };


  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="text_days fs-5 ">
          {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
          remaining until Presale starts
          {/* {days} D {hours} H {minutes} M {seconds} S */}
        </div>
      );
    }
  };



  return (
    <div className="">
      <div className="mint_main">
        <div class="main_home_land_bg">
          <div class="css-diro6f ant-app">
            <div class="container ">
              <div class="text-left" style={{ textAlign: "end" }}></div>
              <div class="row">
                <div class="col-md-7 left_connent text-start">
                  <h1 class="main_home_heading1 text-white">
                    Welcome to the Presale of
                    <br />
                    Book of Gates NFTs on Ethereum Chain
                  </h1>
                  <p class="home_land_para1  text-white">
                    The Book of Gates is a Graphic Novel and Trading Game of 10,008 Character NFTs on Ethereum. Adaptive mint price increases with sales, rewarding early holders. Over 130 Eth in buybacks reward the community for listing NFTs at the Gate Thresholds, creating a high Floor Price
                  </p>
                </div>
                <div class="col-md-5 right_coonent mt-5 mt-md-0">
                  <div class="right_content_card">
                    <h4 class="card_heading_span pt-3">Presale</h4>
                    <div className="text_days fs-5 ">
                      <Countdown
                        date={
                          Date.now() + (parseInt("1679885037") * 1000 - Date.now())
                        }
                        renderer={renderer}
                      />
                    </div>
                    {/* <div class="text_days fs-5 ">
                      <div class="text_days fs-5 ">Presale Started</div>
                    </div> */}
                    <div class="progress_bar_nav mt-3">
                      <h4 class="progress_number">{NFTmintedPercentce}% SOLD</h4>
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
                      </div>
                      <div class="box_text text-white">
                        <span>
                          Public Sale Will live on Friday, March 31, 2023.
                        </span>
                      </div>

                      <div className="d-flex justify-content-center pt-3">
                        <div className="flex main_bg_clt rounded w-50">
                          <button className="clr increament_btn" onClick={handle_number}>  -</button>
                          <span className="clr numbr_here">{count}</span>
                          <button className="clr increament_btn" onClick={handle_pluse}>+</button>
                        </div>
                      </div>
                      <div class="d-flex justify-content-center my-4">
                        {data == false ? (
                          <>
                            <button
                              _ngcontent-bhd-c59=""
                              class="btn btn-eth crypto-btn my-1 py-2 px-1 w-80 my-2"
                            >
                              <img
                                _ngcontent-bhd-c59=""
                                src="https://arc-coin-presale.netlify.app/static/media/metamask.79992a9b.png"
                                height="10"
                              />
                              <span
                                _ngcontent-bhd-c59=""
                                onClick={() => Connect_Wallet()}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presale
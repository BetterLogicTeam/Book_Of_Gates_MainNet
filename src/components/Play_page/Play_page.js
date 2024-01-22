import React, { useEffect, useState } from "react";
import "./Play_page.css";
import PlayPage from "../../assets/PlayPage.jpg";
import Countdown from "react-countdown";
import FullClockAnimated from "../../assets/FullClockAnimated.gif";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadWeb3 } from "../../apis/api";
import { NFT_Contract, NFT_Contract_ABI } from "../../utils/Contract";
import { toast } from "react-toastify";
import Web3 from "web3";
// import 'aos/dist/aos.css';

function Play_page({ hours, minutes, seconds, completed }) {
  const [gate_data, setgate_data] = useState([])
  const [totalSupply, settotalSupply] = useState(0)
  const Completionist = () => <span>Expired</span>;
  const history = useNavigate()
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
  const targetDate = new Date("2023-06-01T00:00:00");


  const webSupply = new Web3("https://bsc-testnet.public.blastapi.io");

  const Gate_Details = async () => {
    try {
      const web3 = window.web3;
      const acc = await loadWeb3();
      let contractOf = new webSupply.eth.Contract(NFT_Contract_ABI, NFT_Contract);
      let getmaxsupply = await contractOf.methods.maxSupply().call();
      let gettotalsupply = await contractOf.methods.totalSupply().call();
      console.log("gettotalsupply", gettotalsupply);
      settotalSupply(gettotalsupply)

      let res = await axios.get(
        `https://gate.womenempowerment.online/Get_All_Gate_Details`
      );
      console.log("Get_data", res?.data);

      if (res.data.success == true) {
        setgate_data(res?.data?.data)
      }


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Gate_Details()
    AOS.init();
  }, []);

  return (
    <div>
      <div className="play_header_main">
        <div className="container">
          <div className="play_header">
            <h1>Treasure Hunt</h1>
            {/* <p>Find treasure at every Gate! Your NFT could open the Chest</p> */}
            <p>Find treasure at every Gate! Your NFT could open a Chest.</p>
          </div>
        </div>

        {/* <div className="play_count_main main_vala">
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
                    Click a Chest. If it opens,we buy your
                  </span>
                  <br />
                  <span className="play_span_2 mgin_fv">
                    NFT at the Buy Price!
                  </span>
                </div>
              </div>
            </div>

            <div className="row mt-5">

              <div className="col-md-6">
                <div className="play_count scnd_vala">
                  <span className="play_span">2</span>
                  <span className="play_span_2 ms-2">
                    List on Opensea.io at the
                  </span>
                  <br />
                  <span className="play_span_2 mgin_fv">
                    Buy Price
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="play_count chotha_vala">
                  <span className="play_span ">4</span>
                  <span className="play_span_2 ms-2">
                    Early keys can try all 12 Chests!
                  </span>
                  <br />
                  <span className="play_span_2 mgin_fv">
                    More keys = More chances
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="play_count_main responc">
          <div className="container">
            <div className="row mt-4">

              <div className="col-md-6">
                <div className="play_count one_vala">
                  <span className="play_span">1</span>
                  <span className="fs-4 ms-2">Mint an NFT</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="play_count">
                  <span className="play_span">2</span>
                  <span className="play_span_2 ms-2">
                    List on Opensea.io at the Buy Price
                  </span>
                </div>
              </div>
            </div>

            <div className="row mt-5">

              <div className="col-md-6">
                <div className="play_count">
                  <span className="play_span">3</span>
                  <span className="play_span_2 ms-2">
                    Click a Chest. If it opens,we buy your
                  </span>
                  <br />
                  <span className="play_span_2 mgin_fv">
                    NFT at the Buy Price!
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="play_count chotha_vala">
                  <span className="play_span ">4</span>
                  <span className="play_span_2 ms-2">
                    Early keys can try all 12 Chests!
                  </span>
                  <br />
                  <span className="play_span_2 mgin_fv">
                    More keys = More chances
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Timer_bck">
        <div
          className="black_header"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div class="grid-container">
            <div class="grid-item">
              <img className="img-fluid" src={FullClockAnimated}></img>
            </div>

            <div class="grid-item timer_text">
              <div className="black_header_text">
                <p className="black_header_text_p ">
                  <Countdown
                    date={new Date("2023-12-19T00:00:00")}
                    renderer={renderer}
                  />
                  ,
                </p>
                <p className="black_header_text_p2">
                  Mint before clock expires and Buy Price DOUBLES!
                  <br />  Up to 250 Eth hidden below
                </p>
              </div>
            </div>
            {/* <div class="grid-item">2</div> */}
          </div>
          <div id="botttom"></div>
        </div>
      </div>

      <div className="main_bgg">
        <div className="container">
          <p className="khali"></p>
          <div className="main_timelin">
            <div className="grid-container">
              <div className="grid-item" onClick={() => (history("/Treasure_Hunt", { state: { data: "1", src: "./sliderImages/Gate1.png", number: "11", gate: totalSupply > 101 ? gate_data[0]?.Gate_status == false ? "Open" : "Closed" : "Closed" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))} style={{ cursor: "pointer" }}>
                <img src="./sliderImages/gate_1.png" />
              </div>

              <div className="grid-item"></div>

              <div className="grid-item"></div>

              <div className="grid-item"></div>

              <div className="grid-item ssccnd"
                onClick={() => (history("/Treasure_Hunt", {
                  state: {
                    src: "./sliderImages/Gate2.png", data: "2", number: "21", gate: totalSupply > 201 ?
                      gate_data[1]?.Gate_status == false ? "Open" : "Closed" : "Closed"
                  }
                }), window.scrollTo({ top: 0, behavior: 'smooth' }))} style={{ cursor: "pointer" }}>

                <img src="./sliderImages/gate_2.png" />
                {/* <div className="time_box ssccnd_box">
                  <span>Buy Price .6 Eth</span>
                </div> */}
              </div>

              <div className="grid-item thhrrd" onClick={() => (history("/Treasure_Hunt", { state: { src: "./sliderImages/Gate3.png", data: "3", number: "31", gate: totalSupply > 300 ? gate_data[2]?.Gate_status == false ? "Open" : "Closed" : "Closed" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))} style={{ cursor: "pointer" }}>
                <div className="thhrrd_emg">
                  <img src="./sliderImages/gate_3.png" />
                  {/* <div className="time_box thhrrd_box">
                    <span>Buy Price 1.2 Eth</span>
                  </div> */}
                </div>
              </div>

              <div className="grid-item chhheva" onClick={() =>
                (history("/Treasure_Hunt", { state: { src: "./sliderImages/Gate6.png", data: "6", number: "61", gate: totalSupply > 2500 ? gate_data[5]?.Gate_status == false ? "Open" : "Closed" : "Closed" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))

              } style={{ cursor: "pointer" }}>
                <img src="./sliderImages/gate_6.png" />
                {/* <div className="time_box chhheva_box">
                  <span>Buy Price 7 Eth</span>
                </div> */}
              </div>

              <div className="grid-item ftth" onClick={() =>
                (history("/Treasure_Hunt", { state: { src: "./sliderImages/Gate5.png", data: "5", number: "51", gate: totalSupply > 1500 ? gate_data[4]?.Gate_status == false ? "Open" : "Closed" : "Closed" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))

              } style={{ cursor: "pointer" }}>
                <img src="./sliderImages/gate_5.png" />
                {/* <div className="time_box ftth_box">
                  <span>Buy Price 3 Eth</span>
                </div> */}
              </div>

              <div className="ngrid-item frrtth" onClick={() =>
                (history("/Treasure_Hunt", { state: { src: "./sliderImages/Gate5.png", data: "4", number: "41", gate: totalSupply > 600 ? gate_data[3]?.Gate_status == false ? "Open" : "Closed" : "Closed" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))

              } style={{ cursor: "pointer" }}>
                <img src="./sliderImages/gate_4.png" />
                {/* <div className="time_box frrtth_box">
                  <span>Buy Price 2 Eth</span>
                </div> */}
              </div>

              <div className="grid-item svvntth" onClick={() => (history("/Treasure_Hunt", { state: { gate: totalSupply > 3500 ? gate_data[6]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate7.png", data: "7", number: "71" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))
              } style={{ cursor: "pointer" }}>
                <div className="">
                  <img src="./sliderImages/gate_7.png" />
                </div>
                {/* <div className="time_box svvntth_box">
                  <span>Buy Price 8 Eth</span>
                </div> */}
              </div>

              <div className="scnd_grid-item"></div>

              <div className="grid-item"></div>
              <div className=""></div>

              <div className="aatth" onClick={() =>
                (history("/Treasure_Hunt", { gate: totalSupply > 4500 ? gate_data[7]?.Gate_status == false ? "Open" : "Closed" : "Closed", state: { src: "./sliderImages/Gate8.png", data: "8", number: "81" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))


              } style={{ cursor: "pointer" }}>
                <div className="aatth_emg">
                  <img src="./sliderImages/gate_8.png" />
                  {/* <div className="time_box aatth_box">
                    <span>Buy Price 9 Eth</span>
                  </div> */}
                </div>
              </div>

              <div className=""></div>

              <div className=""></div>

              <div className="nntth" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 5500 ? gate_data[8]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate9.png", data: "9", number: "91" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))

              } style={{ cursor: "pointer" }}>
                <div className="emg_main">
                  <img src="./sliderImages/gate_9.png" />
                  {/* <div className="time_box nntth_box">
                    <span>Buy Price 10 Eth</span>
                  </div> */}
                </div>
              </div>

              <div className=""></div>

              <div className="tnntth" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 6500 ? gate_data[9]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate10.png", data: "10", number: "99" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))


              } style={{ cursor: "pointer" }}>
                <div className="emg_main">
                  <img src="./sliderImages/gate_10.png" />
                  {/* <div className="time_box tnntth_box">
                    <span>Buy Price 15 Eth</span>
                  </div> */}
                </div>
              </div>

              <div className="elvnnth" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 8500 ? gate_data[10]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate11.png", data: "11", number: "75" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))


              } style={{ cursor: "pointer" }}>
                <img src="./sliderImages/gate_11.png" />
                {/* <div className="time_box elvnnth_box">
                  <span>Buy Price 30 Eth</span>
                </div> */}
              </div>

              <div className="last_itm twllth" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 10008 ? gate_data[11]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate12.png", data: "12", number: "44" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))

              } style={{ cursor: "pointer" }}>
                <img src="./sliderImages/gate_12.png" />
                {/* <div className="time_box twllth_box">
                  <span>Buy Price 50 Eth</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="khali_2"></div>
      </div>

      <div className="main_bg_res">
        <div className="container">
          <div className="main_timelin_res">
            <div className="grid-container">
              <div className="grid-item" onClick={() => (history("/Treasure_Hunt", {
                state: {
                  gate: totalSupply > 101 ?
                    gate_data[0]?.Gate_status == false ? "Open" : "Closed" : "Closed", data: "1", src: "./sliderImages/Gate1.png", number: "11"
                }
              }), window.scrollTo({ top: 0, behavior: 'smooth' }))
              } style={{ cursor: "pointer" }}>
                <img src="./sliderImages/gate_1.png" />
                {/* <div className="time_box">
                  <span>Buy Price .2 Eth</span>
                </div> */}
              </div>

              <div className="grid-item" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 300 ? gate_data[1]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate2.png", data: "2", number: "21" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))


              } style={{ cursor: "pointer" }}>    <img src="./sliderImages/gate_2.png" />
                {/* <div className="time_box">
                  <span>Buy Price .6 Eth</span>
                </div> */}
              </div>

              <div className="grid-item" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 300 ? gate_data[2]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate3.png", data: "3", number: "31" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))


              } style={{ cursor: "pointer" }}> <img src="./sliderImages/gate_3.png" />
                {/* <div className="time_box">
                  <span>Buy Price 1.2 Eth</span>
                </div> */}
              </div>

              <div className="grid-item " onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 600 ? gate_data[3]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate4.png", data: "4", number: "41" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))


              } style={{ cursor: "pointer" }}>   <img src="./sliderImages/gate_4.png" />
                {/* <div className="time_box">
                  <span>Buy Price 2 Eth</span>
                </div> */}
              </div>

              <div className="grid-item" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 1500 ? gate_data[4]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate5.png", data: "5", number: "51" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))


              } style={{ cursor: "pointer" }}>  <img src="./sliderImages/gate_5.png" />
                {/* <div className="time_box">
                  <span>Buy Price 3 Eth</span>
                </div> */}
              </div>

              <div className="grid-item" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 2500 ? gate_data[5]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate6.png", data: "6", number: "61" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))

              } style={{ cursor: "pointer" }}><img src="./sliderImages/gate_6.png" />
                {/* <div className="time_box">
                  <span>Buy Price 7 Eth</span>
                </div> */}
              </div>

              <div className="grid-item" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 3500 ? gate_data[6]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate7.png", data: "7", number: "71" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))


              } style={{ cursor: "pointer" }}>    <img src="./sliderImages/gate_7.png" />
                {/* <div className="time_box">
                  <span>Buy Price 8 Eth</span>
                </div> */}
              </div>

              <div className="grid-item" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 4500 ? gate_data[7]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate8.png", data: "8", number: "81" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))

              } style={{ cursor: "pointer" }}> <img src="./sliderImages/gate_8.png" />
                {/* <div className="time_box">
                  <span>Buy Price 9 Eth</span>
                </div> */}
              </div>

              <div className="grid-item" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 5500 ? gate_data[8]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate9.png", data: "9", number: "91" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))

              } style={{ cursor: "pointer" }}> <img src="./sliderImages/gate_9.png" />
                {/* <div className="time_box">
                  <span>Buy Price 10 Eth</span>
                </div> */}
              </div>

              <div className="grid-item" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 6500 ? gate_data[9]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate10.png", data: "10", number: "99" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))


              } style={{ cursor: "pointer" }}>    <img src="./sliderImages/gate_10.png" />
                {/* <div className="time_box">
                  <span>Buy Price 15 Eth</span>
                </div> */}
              </div>

              <div className="mt-5 grid-item" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 8500 ? gate_data[10]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate11.png", data: "11", number: "75" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))


              } style={{ cursor: "pointer" }}>  <img src="./sliderImages/gate_11.png" />
                {/* <div className="time_box">
                  <span>Buy Price 30 Eth</span>
                </div> */}
              </div>

              <div className="grid-item" onClick={() =>
                (history("/Treasure_Hunt", { state: { gate: totalSupply > 10008 ? gate_data[11]?.Gate_status == false ? "Open" : "Closed" : "Closed", src: "./sliderImages/Gate12.png", data: "12", number: "44" } }), window.scrollTo({ top: 0, behavior: 'smooth' }))

              } style={{ cursor: "pointer" }}> <img src="./sliderImages/gate_12.png" />
                {/* <div className="time_box">
                  <span>Buy Price 50 Eth</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play_page;

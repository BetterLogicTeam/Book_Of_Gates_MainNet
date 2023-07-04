import React, { useEffect } from "react";
import "./Play_page.css";
import PlayPage from "../../assets/PlayPage.jpg";
import Countdown from "react-countdown";
import FullClockAnimated from "../../assets/FullClockAnimated.gif";
import AOS from "aos";
// import 'aos/dist/aos.css';

function Play_page({ hours, minutes, seconds, completed }) {
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
  const targetDate = new Date("2023-06-01T00:00:00");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="play_header_main">
        <div className="container">
          <div className="play_header">
            <h1>Treasure Hunt</h1>
            <p>Find treasure at every Gate! Your NFT could open the Chest</p>
          </div>
        </div>

        <div className="play_count_main main_vala">
          <div className="container">
            <div className="row mt-4">
              {/* <div className="col-md-1"></div> */}
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
              {/* <div className="col-md-1"></div> */}
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
        </div>

        <div className="play_count_main responc">
          <div className="container">
            <div className="row mt-4">
              {/* <div className="col-md-1"></div> */}
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
              {/* <div className="col-md-1"></div> */}
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
                  date={new Date("2023-06-01T00:00:00")}
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
              <div className="grid-item">
                <img src="./sliderImages/gate_1.png" />
                {/* <div className="time_box pehhla_box">
                  <span>Buy Price .2 Eth</span>
                </div> */}
              </div>

              <div className="grid-item"></div>

              <div className="grid-item"></div>

              <div className="grid-item"></div>

              <div className="grid-item ssccnd">
                <img src="./sliderImages/gate_2.png" />
                {/* <div className="time_box ssccnd_box">
                  <span>Buy Price .6 Eth</span>
                </div> */}
              </div>

              <div className="grid-item thhrrd">
                <div className="thhrrd_emg">
                  <img src="./sliderImages/gate_3.png" />
                  {/* <div className="time_box thhrrd_box">
                    <span>Buy Price 1.2 Eth</span>
                  </div> */}
                </div>
              </div>

              <div className="grid-item chhheva">
                <img src="./sliderImages/gate_6.png" />
                {/* <div className="time_box chhheva_box">
                  <span>Buy Price 7 Eth</span>
                </div> */}
              </div>

              <div className="grid-item ftth">
                <img src="./sliderImages/gate_5.png" />
                {/* <div className="time_box ftth_box">
                  <span>Buy Price 3 Eth</span>
                </div> */}
              </div>

              <div className="ngrid-item frrtth">
                <img src="./sliderImages/gate_4.png" />
                {/* <div className="time_box frrtth_box">
                  <span>Buy Price 2 Eth</span>
                </div> */}
              </div>

              <div className="grid-item svvntth">
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

              <div className="aatth">
                <div className="aatth_emg">
                  <img src="./sliderImages/gate_8.png" />
                  {/* <div className="time_box aatth_box">
                    <span>Buy Price 9 Eth</span>
                  </div> */}
                </div>
              </div>

              <div className=""></div>

              <div className=""></div>

              <div className="nntth">
                <div className="emg_main">
                  <img src="./sliderImages/gate_9.png" />
                  {/* <div className="time_box nntth_box">
                    <span>Buy Price 10 Eth</span>
                  </div> */}
                </div>
              </div>

              <div className=""></div>

              <div className="tnntth">
                <div className="emg_main">
                  <img src="./sliderImages/gate_10.png" />
                  {/* <div className="time_box tnntth_box">
                    <span>Buy Price 15 Eth</span>
                  </div> */}
                </div>
              </div>

              <div className="elvnnth">
                <img src="./sliderImages/gate_11.png" />
                {/* <div className="time_box elvnnth_box">
                  <span>Buy Price 30 Eth</span>
                </div> */}
              </div>

              <div className="last_itm twllth">
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
              <div className="grid-item">
                <img src="./sliderImages/gate_1.png" />
                {/* <div className="time_box">
                  <span>Buy Price .2 Eth</span>
                </div> */}
              </div>

              <div className="grid-item">
                <img src="./sliderImages/gate_2.png" />
                {/* <div className="time_box">
                  <span>Buy Price .6 Eth</span>
                </div> */}
              </div>

              <div className="grid-item">
                <img src="./sliderImages/gate_3.png" />
                {/* <div className="time_box">
                  <span>Buy Price 1.2 Eth</span>
                </div> */}
              </div>

              <div className="grid-item">
                <img src="./sliderImages/gate_4.png" />
                {/* <div className="time_box">
                  <span>Buy Price 2 Eth</span>
                </div> */}
              </div>

              <div className="grid-item">
                <img src="./sliderImages/gate_5.png" />
                {/* <div className="time_box">
                  <span>Buy Price 3 Eth</span>
                </div> */}
              </div>

              <div className="grid-item">
                <img src="./sliderImages/gate_6.png" />
                {/* <div className="time_box">
                  <span>Buy Price 7 Eth</span>
                </div> */}
              </div>

              <div className="grid-item">
                <img src="./sliderImages/gate_7.png" />
                {/* <div className="time_box">
                  <span>Buy Price 8 Eth</span>
                </div> */}
              </div>

              <div className="grid-item">
                <img src="./sliderImages/gate_8.png" />
                {/* <div className="time_box">
                  <span>Buy Price 9 Eth</span>
                </div> */}
              </div>

              <div className="grid-item">
                <img src="./sliderImages/gate_9.png" />
                {/* <div className="time_box">
                  <span>Buy Price 10 Eth</span>
                </div> */}
              </div>

              <div className="grid-item">
                <img src="./sliderImages/gate_10.png" />
                {/* <div className="time_box">
                  <span>Buy Price 15 Eth</span>
                </div> */}
              </div>

              <div className="mt-5 grid-item">
                <img src="./sliderImages/gate_11.png" />
                {/* <div className="time_box">
                  <span>Buy Price 30 Eth</span>
                </div> */}
              </div>

              <div className="grid-item">
                <img src="./sliderImages/gate_12.png" />
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

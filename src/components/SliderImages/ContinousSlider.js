import React from "react";
import MintBtn from "../secone/MintBtn";
import "./styles.css";
function ContinousSlider() {
  return (
    <>
      <div className="main-div" id="Traits">
        <MintBtn />
        <article>
          <div>
            <ul>
              <li>
                <img src="./sliderImages/normandy.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Surgical.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Tremonte.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Royal.jpg" />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="../sliderImages/Row.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Winchester.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Caffe.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Newsstand.jpg" />
              </li>
            </ul>
          </div>
        </article>
      </div>
      {/* --------------------------------------------------------------- */}
      <div className="main-div_2">
        <article className="article_two">
          <div>
            <ul>
              <li>
                <img src="../sliderImages/Clarke.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Egypt.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Winchester.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Surgical.jpg" />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="../sliderImages/Row.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Clarke.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Caffe.jpg" />
              </li>
              <li>
                <img src="../sliderImages/Surgical.jpg" />
              </li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
}
export default ContinousSlider;

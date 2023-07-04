import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Mint_modal(props) {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton> */}
      {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      {/* </Modal.Header> */}
      <Modal.Body>
        <div className="modal_main">
          <div
            class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10  MuiGrid-grid-xl-4 jss3 css-14oj4i8"
            tabindex="-1"
            style={{
              opacity: "1",
              transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            }}
          >
            <div class="main_content">
              <h5 class="MuiTypography-root jss4 MuiTypography-h5">
                WhiteList Mint
              </h5>
              <h6 class="MuiTypography-root jss5 MuiTypography-subtitle1">
                Up to 3 tokens per time
              </h6>
              <button
                class="MuiButtonBase-root MuiButton-root MuiButton-outlined jss6"
                tabindex="0"
                type="button"
              >
                <span class="MuiButton-label">
                  <p
                    class="MuiTypography-root jss7 MuiTypography-body1"
                    onClick={decrement}
                  >
                    -
                  </p>
                  <p class="MuiTypography-root jss7 MuiTypography-body1">
                    {count}
                  </p>
                  <p
                    class="MuiTypography-root jss7 MuiTypography-body1"
                    onClick={increment}
                  >
                    +
                  </p>
                </span>
                <span class="MuiTouchRipple-root"></span>
              </button>
              <h6 class="MuiTypography-root jss5 MuiTypography-subtitle1">
                0.128 ETH for each Character + gas fees ⛽. Recommended to mint
                many at a time (maximum 3) to economize gas fees.
              </h6>
              <div class="MuiGrid-root MuiGrid-spacing-xs-undefined css-d5ww2a jss9">
                <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 css-s15qbq">
                  <button
                    class="MuiButtonBase-root MuiButton-root MuiButton-contained"
                    tabindex="0"
                    type="button"
                    style={{
                      color: "rgb(255, 255, 255)",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      padding: "0.3rem 2rem",
                      textTransform: "uppercase",
                      border: "none",
                      backgroundColor: "rgb(216, 83, 46)",
                      borderRadius: "10rem",
                      cursor: "pointer",
                    }}
                  >
                    <span class="MuiButton-label">CLAIM 1 NFT</span>
                    <span class="MuiTouchRipple-root"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

// function Mint_modal() {
//   const [modalShow, setModalShow] = React.useState(false);
//   return (
//     <div>
//       <div className="mint_btnMain">
//         {/* <Button
//           className="mint_btn"
//           variant=""
//           >
//           Mint Now
//         </Button> */}
//         <button
//           _ngcontent-bhd-c59=""
//           class="btn btn-eth crypto-btn my-1 py-2 px-1 w-80 my-2"
//           onClick={() => setModalShow(true)}
//         >
//           <img
//             _ngcontent-bhd-c59=""
//             src="https://arc-coin-presale.netlify.app/static/media/metamask.79992a9b.png"
//             height="10"
//           />
//           <span _ngcontent-bhd-c59="">Mint Now</span>
//         </button>
//       </div>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </div>
//   );
// }

export default Mint_modal;

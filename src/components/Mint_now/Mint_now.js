import React from "react";
import { Link } from "react-router-dom";

function Mint_now() {
  return (
    <div className="mint_now_main">
      <div class=" container mt-5 ">
        <div className="row ">
          <div class="col-lg-4 col-md-4 btn_center1">
            <Link to="/mint">
              <div class="btn button3">Public Mint</div>
            </Link>
          </div>

          <div class="col-lg-4 col-md-4 btn_center1">
            <Link to="/whitelist">
              {" "}
              <div class="btn button3">Whitelist Mint</div>
            </Link>
          </div>
          <div class="col-lg-4 col-md-4 btn_center1">
            <Link to="/presale">
              {" "}
              <div class="btn button3">Presale Mint</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint_now;

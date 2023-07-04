import React, { useEffect, useState } from "react";
import "./Refferal_style.css";
import axios from "axios";
import { loadWeb3 } from "../../apis/api";
import { API } from "../../API";
import Web3 from "web3";

export default function Refferal_Info() {
  const [Refferal_data, setRefferal_data] = useState([]);
  const webSupply = new Web3(process.env.RPC);
  const Get_refferal_info = async () => {
    let acc = await loadWeb3();

    try {
      let res = await API.get(
        `/Refferal_Info?Address=${acc}`
      );
      console.log("res", res);
      setRefferal_data(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Get_refferal_info();
  }, []);

  return (
    <div>
      <div className="play_header_main">
        <div className="container">
          <div className="play_header">
            <h1>Refferal Info</h1>
          </div>
        </div>

        <div className="play_count_main main_vala">
          <div className="container">
            <table class="table text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Refferal Address</th>
                  <th scope="col">Minter Address</th>
                  <th scope="col">Mint Price</th>
                  <th scope="col">Mint Value</th>
                </tr>
              </thead>
              <tbody>
               
                {
                  Refferal_data.length==0 ?
                  <>
                  
                  <h1 >No Refferal</h1></>
                  :
                  <>
                    {Refferal_data.map((items, index) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td>{items.Refferal_Address}</td>
                        <td>{items.Minter_Address}</td>
                        <td>{webSupply.utils.fromWei(items.Mint_Price.toString())}</td>
                        <td>{items.Mint_Value}</td>

                      </tr>
                    </>
                  );
                })}
                  </>
                }
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

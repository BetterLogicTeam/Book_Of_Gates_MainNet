import React from "react";
import "./Admin_Refferal_details.css";
import { loadWeb3 } from "../../apis/api";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Web3 from "web3";
import { API } from "../../API";
import { CSVLink } from "react-csv";
import { Table } from "react-bootstrap";
import 'dotenv/config'

export default function Admin_Refferal_details() {
  const [Refferal_data, setRefferal_data] = useState([]);
  const [Row, setRow] = useState([]);

  const columns = [
    {
      label: "Refferal Address",
      key: "Refferal_Address",
    },
    {
      label: "Minte Address",
      key: "Minter_Address",
    },
    {
      label: "Mint Price",
      key: "Mint_Price",
    },
    {
      label: "Mint Value ",
      key: "Mint_Value",
    },
  ];

  const webSupply = new Web3(process.env.RPC);
  console.log("webSupply", webSupply);

  const Get_refferal_info = async () => {
    const web3= window.web3
    try {
      let res = await API.get(`/Get_Refferal_data`);
      console.log("res", res);
      res = res.data.data;
      let arr = [];
      res.forEach((item, index) => {
        //    console.log("item",item);

        arr.push({
          Refferal_Address: item?.Refferal_Address,
          Minter_Address: item?.Minter_Address,
          Mint_Price: webSupply.utils.fromWei(item?.Mint_Price.toString()),
          Mint_Value: item?.Mint_Value,
        });
      });
      setRefferal_data(arr);
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
            <h1>Refferal Details</h1>
          </div>
        </div>

        <div className="play_count_main ">
          <div className="container">
            <div style={{ padding: "2rem" }} className="tab_res">
              <Table bordered className="text-white w-100 table-responsive ">
                <thead>
                  <tr>
                    {columns.map((items, index) => {
                      return (
                        <>
                          <th className="">{items.label}</th>
                        </>
                      );
                    })}
                  </tr>
                </thead>

                <tbody className="text-white">
                  {Refferal_data.map((items, index) => (
                    <tr key={index}>
                      {/* <th scope="row">{index + 1}</th> */}
                      <td>{items.Refferal_Address}</td>
                      <td>{items.Minter_Address}</td>
                      <td>{items.Mint_Price}</td>
                      <td>{items.Mint_Value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* <Button className="contBtn" > */}
              <CSVLink
                data={Refferal_data}
                headers={columns}
                filename={"Books_Of_Gates_Refferal.csv"}
                className="text-decoration-none text-white contBtn"
              >
                Download File
              </CSVLink>

              {/* </Button> */}
            </div>
            {/* <div class="table-responsive">
              <table class="table  text-white">
                <thead>
                  <tr>
                    {
                      columns.map((items)=>{
                        <th>{items.label}</th>
                      })
                    }
                  </tr>
                </thead>
                <tbody>
                  {Refferal_data.map((items, index) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{items.Refferal_Address}</td>
                          <td>{items.Minter_Address}</td>
                          <td>{items.Mint_Value}</td>
                          <td>{items.Mint_Value}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

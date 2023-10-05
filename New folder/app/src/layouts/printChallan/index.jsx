import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./print.css";
import { useParams } from "react-router-dom";

const PrintPage = () => {
  const { id } = useParams();
  const [data, Setdata] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://127.0.0.1:8001/api/record/${id}`);
      const recentRecords = res.data.data;
      // console.log(recentRecords)
      Setdata(recentRecords);
    })();
  }, []);
  const printIframe = (id) => {
    const iframe = document.frames ? document.frames[id] : document.getElementById(id);
    const iframeWindow = iframe.contentWindow || iframe;

    iframe.focus();
    iframeWindow.print();

    return false;
  };
  return (
    <>
      <iframe
        id="print"
        // src={`http://localhost:8001/print/${id}`}
        srcDoc={`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>PrintChallan</title>
            <style>table.customTable {
                width: 100%;
                background-color: #FFFFFF;
                border-collapse: collapse;
                border-width: 2px;
                border-color: #000000;
                border-style: solid;
                color: #000000;
              }

              table.customTable td, table.customTable th {
                border-width: 2px;
                border-color: #000000;
                border-style: solid;
                padding: 5px;
              }

              table.customTable thead {
                background-color: #FFFFFF;
              }
            </style>
        </head>
        <body>
            <div style="display: block;">
                <div style="display: block;">
                    <div style="display: flex;justify-content: center;align-items: center;flex-direction: column;">
                        <div style="position: relative;display: flex;align-items: center;justify-content: space-around;width: 100%;" >
                            <h3>UTTARAKHAND  <br />POLICE</h3>
                            <img
                            src="https://cracku.in/latest-govt-jobs/wp-content/uploads/2020/12/Uttarakhand-Police-Logo.jpeg"
                            height="100x"
                            width="100px"
                          />
                          <h3>BHOPAL</h3>
                        </div>
                        <div>
                            <div style="position: relative;">
                                <img src="http://127.0.0.1:8000/static/images/captured/2/plot_image.png" style="width: 100%;height: auto;margin: 10px;position: relative;max-width: 480px;">
                                <div style="position: absolute;top: 20px;left: 40px;text-shadow:-2px 2px 0 #000, 2px 2px 0 #000, 2px -1px 0 #000, -2px -2px 0 #000;">
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">RECORD ID </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">VEHICLE NUMBER  </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">VEHICLE CLASS</h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">SPEED </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">DISTANCE </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">DIRECTION </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">LATITUDE </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">LONGITUDE </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">CREATED DATE </h1>


                                </div>
                                <div style="position: absolute;top: 20px;left: 190px;text-shadow:-2px 2px 0 #000, 2px 2px 0 #000, 2px -1px 0 #000, -2px -2px 0 #000;">
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">RECORD ID </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">VEHICLE NUMBER  </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">VEHICLE CLASS</h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">SPEED </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">DISTANCE </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">DIRECTION </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">LATITUDE </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">LONGITUDE </h1>
                                    <h1 style="color: #ff3;font-size: 11px;font-family: sans-serif;font-weight: 600;">CREATED DATE </h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="http://127.0.0.1:8000/static/images/captured/2/2.png" style="width: 100px;"/>
                        </div>
                        <div style="display: flex;width: 100%;">
                            <table class="customTable">
                                <tbody>
                                  <tr>
                                    <td>Name</td>
                                  </tr>
                                  <tr>
                                    <td>DL No</td>
                                  </tr>
                                  <tr>
                                    <td>Address</td>
                                  </tr>
                                  <tr>
                                    <td>Contact No</td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                        <div style="display: flex;justify-content: flex-end;width: 100%;padding-right: 20px;padding-top: 10px;">
                            <h3>Signature</h3>
                        </div>

                    </div>
                </div>
            </div>

        </body>
        </html>`}
        style={{ position: "absolute", top: "-1000px", left: "-1000px" }}
        title="Print Challan"
      />
      <button onClick={() => printIframe("print")}>PRINT</button>
    </>
  );
};

export default PrintPage;

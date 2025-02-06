import React from "react";
import heroImage from ".././../../component/Assest/heroimg.webp";
import { Rate } from "antd";
import {DownloadOutlined} from "@ant-design/icons";

export default function Hero() {
  return (
  

    <div className="container-fluid min-vh-100" style={{ backgroundColor: "#1A202C" }}>
      <h3 className="heroText  text-center text-light fw-bold py-3 mb-0">
        CapCut MOD APK Download V13.10.0 (Pro, Premium APK)
      </h3>
      <div className="row mianContainer " >
        <div className="col-12 col-md-5  d-flex flex-column justify-content-center align-items-center">
          <img
            src={heroImage}
            className="heroImage   d-block"
            alt="hero capCut Logo"
          />
          <span className="text-light fw-bold">
            4.5
            <Rate allowHalf defaultValue={4.5} className="ps-3 text-light" />
          </span>
        </div>
        <div className="col-12 col-md-7 p-4 d-flex flex-column justify-content-center align-items-center">
          <table
            className="table  table-bordered table-hover "
           >
            <tbody className="text-light fw-bold">

            <tr>
              <td className="border p-2 text-light " style={{backgroundColor:"#1A202C" }} >App Name</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>CapCut MOD APK</td>
            </tr>
            <tr>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Size</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>	285 MB</td>
            </tr>
            <tr>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Version</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>	V13.10.0</td>
            </tr>
            <tr>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Last Update</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>	Today</td>
            </tr>
            <tr>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Developer</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Bytedance Pte. Ltd.</td>
            </tr>
            <tr>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>License Type</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>	free</td>
            </tr>
            <tr>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Requirement</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Android 5.0 Or Above</td>
            </tr>
            <tr>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Software Category</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Video editing and player</td>
            </tr>
            <tr>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Worldwide Downloads</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>500M+</td>
            </tr>
            <tr>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Features</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Pro Unlocked, No Watermark</td>
            </tr>
            <tr>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>Rating</td>
              <td className="border p-2 text-light" style={{backgroundColor:"#1A202C" }}>4.5</td>
            </tr>
            </tbody>

          </table>
          <button className="btn downLoadBtn w-100  fs-5 fw-bold p-2"  ><DownloadOutlined  style={{ fontSize: '20px' }}/> Download</button>
        </div>
      </div>
    </div>
  );
}

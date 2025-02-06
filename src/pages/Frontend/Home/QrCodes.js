import React from "react";
import { CheckCircleOutlined,ArrowRightOutlined } from "@ant-design/icons";

// ***********************Images************
import rdEffect from "../../../component/Assest/3rdEffect.webp";
import QRsCANE from "../../../component/Assest/QRsCANE.webp";
import formatQrCode from "../../../component/Assest/formatQrCode.webp";

export default function QrCodes() {
  return (
    <div className="container">
      <div className="3rdEffect my-3">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <CheckCircleOutlined className="pe-2 fs-5" />
          3D Effects
        </p>
        <div className="row">
          <div className="col-12 col-md-6 py-2 d-flex justify-content-center align-items-center">
            <img
              src={rdEffect}
              alt="rdEffect"
              style={{
                width: "100%",
                objectFit: "cover",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div
            className="col-12 col-md-6 py-2"
            style={{ color: "#495057", fontSize: "18px" }}
          >
            <p>
              CapCut Premium MOD APK has many futuristic features, but 3D and
              blur effects are some trending effects. Most content creators use
              these effects to turn their videos into ideal videos. These
              effects are also trending on TikTok and Instagram. The footage
              looks unique and outstanding when decorated with the effect.
            </p>
            <p className="fw-bold text-dark py-1">
              Follow these essential steps to use the effect in the video:
            </p>

            <ul>
              <li>
                Create a brand new project and go into the effects toolbar.
              </li>
              <li>Select the video part and apply the 3D effect.</li>
              <li>Tap on the video and adjust the effects </li>
              <li>
                To fast video editing flow, copy and paste effects at another
                part of the video
              </li>
              <li>
                After that, import your desired video into high quality 4k 60fps
                HD.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="generateQrCode my-3">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <CheckCircleOutlined className="pe-2 fs-5" />
          Generate QR Codes in CapCut MOD APK
        </p>
        <p style={{ color: "#495057", fontSize: "18px" }}>
          CapCut Pro APK introduced a new QR code generator feature. Now, you
          can generate static and dynamic QR codes without any hassle.
        </p>
        <div className="image d-flex justify-content-center align-items-center">
            <img src={QRsCANE} alt="QRsCANE" style={{width:"80%"}} />
        </div>
      </div>
      <div className="formateOfQrCode">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <ArrowRightOutlined  className="pe-2 fs-5"/>
          Formats of QR Codes
        </p>
        <p style={{ color: "#495057", fontSize: "18px" }}>
        Formats of QR Codes
        You can make QR codes in different formats that match your favorite format.
        </p>
        <p className="fw-bold text-dark py-1">QR codes have different styles and formats like that:</p>
        <ul style={{listStyle:"none"}} >
            <li> <ArrowRightOutlined  className="pe-2"/> Scalable vector files</li>
            <li> <ArrowRightOutlined  className="pe-2"/> Print-ready pdf files</li>
            <li> <ArrowRightOutlined  className="pe-2"/>High-quality resolution images</li>
            <li> <ArrowRightOutlined  className="pe-2"/>Customize QR codes for the appearance</li>
        </ul>
        <div className="image d-flex justify-content-center align-items-center">
            <img src={formatQrCode} alt="QRsCANE" style={{width:"80%"}} />
        </div>
        <p style={{ color: "#495057",paddingTop:"15px" }}>Customizing, you can add text and a logo according to your brand style QR code.</p>
      </div>
      <div className="generateQrCode my-3">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <CheckCircleOutlined className="pe-2 fs-5" />
          Generate QR Codes in CapCut MOD APK
        </p>
        <p style={{ color: "#495057", fontSize: "18px" }}>
          CapCut Pro APK introduced a new QR code generator feature. Now, you
          can generate static and dynamic QR codes without any hassle.
        </p>
        <div className="image d-flex justify-content-center align-items-center">
            <img src={QRsCANE} alt="QRsCANE" style={{width:"80%"}} />
        </div>
      </div>


      <div className="howToGeneraterCode my-3">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <ArrowRightOutlined  className="pe-2 fs-5"/>
          How to Generate QR Codes in CapCut?
        </p>
        
        <p className="fw-bold text-dark py-1">You can generate QR Codes By following these steps:</p>
        <ul style={{listStyle:"none"}} >
            <li> <ArrowRightOutlined  className="pe-2"/> Sign up for the free for the App</li>
            <li> <ArrowRightOutlined  className="pe-2"/>Choose the template for the QR code</li>
            <li> <ArrowRightOutlined  className="pe-2"/>Customized text and logo according to your brand logo style</li>
            <li> <ArrowRightOutlined  className="pe-2"/>QR code is ready to download in different formats and share on your social media platform</li>
        </ul>
        <div className="image d-flex justify-content-center align-items-center">
            <img src={formatQrCode} alt="QRsCANE" style={{width:"80%"}} />
        </div>
        <p style={{ color: "#495057",paddingTop:"15px" }}>Customizing, you can add text and a logo according to your brand style QR code.</p>
      </div>





    </div>
  );
}

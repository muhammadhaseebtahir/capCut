import React, { useState } from "react";
import { Carousel, Image } from "antd";
import { images } from "../../../component/Assest/image/index"; 
import {textParaFirst,textValuseSecond} from "../../../component/Assest/textPara";
import {
  DownOutlined,
  UpOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

// *******************Image*******************
import longImage from "../../../component/Assest/longImage.webp"; // Ensure this path is correct
import keyFrames from "../../../component/Assest/keyFrames.webp";
import smoothSlow from "../../../component/Assest/smoothSlow.webp";
import videoStabilization from "../../../component/Assest/videoStabilization.webp";
import aiModel from "../../../component/Assest/aiModel.webp";
import xmlSupport from "../../../component/Assest/xmlSupport.webp";


export default function ScreenShot() {
  const [isOpen, setIsOpen] = useState(false);
  const text = (
    <ul style={{ color: "white", padding: "10px" }}>
      <li>Screenshots</li>
      <li>What is CapCut APK?</li>
      <li>What is CapCut MOD APK?</li>
      <li>
        Features of CapCut APK
        <ul>
          <li>User-Friendly Interface</li>
          <li>Video Ratio Adjustment</li>
          <li>Auto Caption</li>
          <li>Incredible Animations</li>
        </ul>
      </li>
    </ul>
  );
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000, // Smooth transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Duration each slide stays (ms)
    slidesToShow: 6, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(textParaFirst);
  

  return (
    <div className="container">
      {/* Text Section */}
      <div className="textBox">
        <p className="my-3 para_text">
          Cap Are you tired of searching for professional video editing
          software? Do you want to edit your YouTube and personal video with
          mind-blowing features like 3D zooming effects, picture-in-picture
          (PIP), 4K exports, and many more? These advanced features other video
          editing apps don’t offer.
        </p>
        <p className="para_text">
          So, I have solutions to all your problems with CapCut MOD APK. The App
          has pro templates and a bunch of filters for free. The App editor is
          magical, transforming raw footage into polished video with premium
          features. That’s why many people love it.
        </p>
      </div>

      {/* Button Section */}
      <div className="row">
        <div className="col">
          <p className="tableOfContent text-center py-2 fw-bold fs-5">
            ScreenShots
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel {...carouselSettings}>
        {images.map((item, index) => (
          <div
            key={index}
            className="py-4 image-container d-flex justify-content-center"
          >
            <Image
              preview={false}
              src={item.image}
              width="180px"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </Carousel>

      <div
        className="tableOfContent w-100 px-3 py-3 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          Table of Contents
          {isOpen ? (
            <UpOutlined style={{ fontSize: "18px", color: "white" }} />
          ) : (
            <DownOutlined style={{ fontSize: "18px", color: "white" }} />
          )}
        </div>
        {isOpen && (
          <div
            style={{
              backgroundColor: "#1A202C",
              color: "white",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            {text}
          </div>
        )}
      </div>

<div className="features my-3">
  {
    textParaFirst.map((item, index) => (
      <div key={index}>
      <p className="tableOfContent text-center py-2 fw-bold fs-5">
     {item.name}
    </p>
     <p style={{ fontSize: "14px", color: "#495057" }}>
   
      {item.description}
   </p>
      </div>

    ))
  }
</div>
     
      <div className="row d-flex justify-content-between flex-wrap  my-3 ">
        <div className="col-12 col-md-5 col-lg-3 card p-3 cardBox mb-3 mb-lg-0">
          <h3 className="text-center">User-Friendly Interface</h3>
          <p className="pt-2">
            The App provides a professional-looking, user-friendly interface
            without a learning curve. User access: Simple navigation for
            merging, trimming, incredible effects, and soundtracks. These
            filters and pre-set templates allow users to create a
            professional-looking video.
          </p>
        </div>
        <div
          className="col-12 col-md-5 col-lg-3  card p-3 cardBox mb-3 mb-lg-0"
          style={{ backgroundColor: "#f7fafc" }}
        >
          <h3 className="text-center">User-Friendly Interface</h3>
          <p className="pt-2">
            The App provides a professional-looking, user-friendly interface
            without a learning curve. User access: Simple navigation for
            merging, trimming, incredible effects, and soundtracks. These
            filters and pre-set templates allow users to create a
            professional-looking video.
          </p>
        </div>
        <div className="col-12 col-md-5 col-lg-3  card p-3 cardBox mb-3 mb-md-0">
          <h3 className="text-center">User-Friendly Interface</h3>
          <p className="pt-2">
            The App provides a professional-looking, user-friendly interface
            without a learning curve. User access: Simple navigation for
            merging, trimming, incredible effects, and soundtracks. These
            filters and pre-set templates allow users to create a
            professional-looking video.
          </p>
        </div>
        <div
          className="col-12 col-md-5 col-lg-3  card p-3 cardBox "
          style={{ backgroundColor: "#f7fafc" }}
        >
          <h3 className="text-center">User-Friendly Interface</h3>
          <p className="pt-2">
            The App provides a professional-looking, user-friendly interface
            without a learning curve. User access: Simple navigation for
            merging, trimming, incredible effects, and soundtracks. These
            filters and pre-set templates allow users to create a
            professional-looking video.
          </p>
        </div>
      </div>
      <div className="latestCapCut">
        <p className="tableOfContent text-center py-2 fw-bold fs-4">
          Latest CapCut Pro APK Features
        </p>
        <p style={{ color: "#495057" }}>
          You should not be sitting on the fence after reading about the amazing
          CapCut Mod APK Features. APK CapCut Pro offers a vast range of
          features like multi-layer editing, voice-over recording, chroma key,
          no watermark, 3d effects, no ads, pro template, Picture In
          Picture(PIP), XML support, 4k video export, speed control, vector
          graphics, thousand fonts, smooth slow-motion effect, stabilization,
          authoritative caption tool, song library, and many more. Now, we
          explain these stunning features one by one in detail.
        </p>
        <div className="image d-flex justify-content-center my-3">
          <img src={longImage} alt="" style={{ height: "150vh",width:"100%" }} />
        </div>
      </div>
      <div className="keyFrames">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <CheckCircleOutlined className="pe-2 fs-5" />
          Keyframe Animation
        </p>
        <div className="row">
          <div
            className="col-12 col-md-6 py-2"
            style={{ color: "#495057", fontSize: "18px" }}
          >
            <p>
              CapCut Latest version Mod APK introduced a new mind-blowing
              feature, keyframe animation. The feature is right as rain to craft
              your video with a fascinating look. You can smooth your video
              transition by defining the ending and starting point.{" "}
              <span className="fw-bold text-dark">
                {" "}
                We explain to you how to craft your video or photo using this
                feature:
              </span>
            </p>
            <ul>
              <li>Choose a specific video to apply the zoom effect</li>
              <li>
                Set the length of your video by clicking on the keyframe icon
              </li>
              <li>
                Carefully implement the zoom-in effect by starting and ending
                points of the video
              </li>
            </ul>
            <p>Now, the top-notch video clip is ready by using the feature.</p>
          </div>
          <div className="col-12 col-md-6 py-2 d-flex justify-content-center align-items-center">
            <img
              src={keyFrames}
             alt="keyFrames"
              style={{
                width: "100%",
                objectFit: "cover",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="smoothSlowMotion my-3">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <CheckCircleOutlined className="pe-2 fs-5" />
          Smooth Slow Motion Effect
        </p>
        <div className="row">
          <div className="col-12 col-md-6 py-2 d-flex justify-content-center align-items-center">
            <img
              src={smoothSlow}
          alt="smoothSlow"
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
              The smooth, slow-motion effect is the most popular. This effect is
              mostly trending at TikTok and instagram reels. We can also call it
              the “slow mo effect”.{" "}
              <span className="fw-bold text-dark">
                {" "}
                Make your video stunning with the effect by following these
                steps:
              </span>
            </p>
            <ul>
              <li>Start the new project and import videos from the gallery</li>
              <li>
                You have different options in the editor like mute sound, speed,
                trem, spilled, normal, and curve
              </li>
            </ul>
            <p>
              After applying effects, your desired video is ready. You can
              export it in 720p to 4k HD.
            </p>
          </div>
        </div>
      </div>
      <div className="videoStabilization my-3">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <CheckCircleOutlined className="pe-2 fs-5" />
          Video Stabilization
        </p>
        <div className="row">
          <div
            className="col-12 col-md-6 py-2"
            style={{ color: "#495057", fontSize: "18px" }}
          >
            <p>
              Video stabilization is a brilliant thing since sliced bread. The
              feature is very helpful for you if your video contains shakiness
              and blurriness. The features work for you like a magical wand. It
              transforms your blurriness into a stunning video. How to use this
              magic wand?
              <span className="fw-bold text-dark">
                We explain to you step by step about video stabilization:
              </span>
            </p>
            <ul>
              <li>Press on the brand-new project </li>
              <li>Add the blurriness and shakiness video to the timeline</li>
              <li>
                In the toolbar, select the stabilize and adjust the level of
                stabilization
              </li>
            </ul>
            <p>Your awesome video is ready; it’s like a piece of cake.</p>
          </div>
          <div className="col-12 col-md-6 py-2 d-flex justify-content-center align-items-center">
            <img
              src={videoStabilization}
             alt="videoStabilization"
              style={{
                width: "100%",
                objectFit: "cover",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="glitchEffect mb-3">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <CheckCircleOutlined className="pe-2 fs-5" />
          Glitch Effect
        </p>
        <div className="row">
          <div
            className="col-12 col-md-6 py-2"
            style={{ color: "#495057", fontSize: "18px" }}
          >
            <p>
              Glitch is one of the most famous effects on social media
              platforms. The effect converts your raw video footage into a
              cinematic look.
              <span className="fw-bold text-dark">
                Unlock the magic of the effect by following these steps:
              </span>
            </p>
            <ul>
              <li>
                To make a fascinating video, click on a brand new project{" "}
              </li>
              <li>Click to upload the video</li>
              <li>Select the glitch effect from the effects toolbar</li>
            </ul>
            <p>
              Use the glitch effect like a pro for more audience engagement.
              Step by step guide is in the video tutorial.
            </p>
          </div>
          <div className="col-12 col-md-6 py-2 d-flex justify-content-center align-items-center">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/mCpURi0-vBw?si=V-kFyGfgfk2-bwkn"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="aiMidel  mb-3">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <CheckCircleOutlined className="pe-2 fs-5" />
          AI Model
        </p>
        <div className="row">
          <div className="col-12 col-md-6 py-2 d-flex justify-content-center align-items-center">
            <img src={aiModel} alt="aiModel"  style={{ height: "170vh",width:"100%" }} />
          </div>
          <div
            className="col-12 col-md-6 py-2"
            style={{ color: "#495057", fontSize: "18px" }}
          >
            <p>
              CapCut MOD APK AI Model Guide Infographics The AI Model is an
              incredible feature of the CapCut APK Mod. In the App menu, click
              on the AI model. You can select male and female models according
              to your choice. You can choose CapCut built-in library products or
              from your mobile gallery. After choosing a product, you can
              customize the background, size, and style.
            </p>
            <p className="fw-bold text-dark py-3">
              AI model step-by-step guide below:
            </p>
            <ul>
              <li>Go to the App menu, where the gateway AI model is.</li>
              <li>Select the AI model</li>
              <li>Select the products and poses of the AI model</li>
            </ul>
            <p>
              Elevate most sales of your product with the power of AI model
              products and poses.
            </p>
          </div>
        </div>
      </div>
      <div className="smoothSlowMotion my-3">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <CheckCircleOutlined className="pe-2 fs-5" />
          Smooth Slow Motion Effect
        </p>
        <div className="row">
          <div className="col-12 col-md-6 py-2 d-flex justify-content-center align-items-center">
            <img
              src={smoothSlow}
             alt="smoothSlow"
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
              The smooth, slow-motion effect is the most popular. This effect is
              mostly trending at TikTok and instagram reels. We can also call it
              the “slow mo effect”.{" "}
              <span className="fw-bold text-dark">
                {" "}
                Make your video stunning with the effect by following these
                steps:
              </span>
            </p>
            <ul>
              <li>Start the new project and import videos from the gallery</li>
              <li>
                You have different options in the editor like mute sound, speed,
                trem, spilled, normal, and curve
              </li>
            </ul>
            <p>
              After applying effects, your desired video is ready. You can
              export it in 720p to 4k HD.
            </p>
          </div>
        </div>
      </div>
      <div className="xmlSupport my-3">
        <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
          <CheckCircleOutlined className="pe-2 fs-5" />
          XML Support
        </p>
        <div className="row">
          <div
            className="col-12 col-md-6 py-2"
            style={{ color: "#495057", fontSize: "18px" }}
          >
            <p>
              One of the most precious features of CapCut MOD APK is XML
              (extensible markup language) support. Video editing is
              time-consuming, but it can be easy with a proper selection of
              tools. As one of the best video editing software options
              available, CapCut’s features store and transfer data with other
              databases, websites, and other 3rd party apps.
            </p>

            <p>
              You can also import and export data effortlessly through XML with
              other editing Apps such as Final Cut X, Filmora, and Final Cut
              Pro.
            </p>
          </div>
          <div className="col-12 col-md-6 py-2 d-flex justify-content-center align-items-center">
            <img
              src={xmlSupport}
              alt="xmlSupport"
              style={{
                width: "100%",
                objectFit: "cover",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
      </div>

    <div className="box">
      {
        textValuseSecond.map((item, index) => (
          <div className="boxItem" key={index}>
              <p className="tableOfContent text-center py-2 fw-bold fs-4 ">
            <CheckCircleOutlined className="pe-2 fs-5" />
          {item.name}
        </p>
            <p>{item.description}</p>
          </div>
        ))
      }
    </div>


    </div>
  );
}

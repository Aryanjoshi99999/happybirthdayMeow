import React from "react";
import "./Photogallery.css";

// emojis
import balloonImage from "../../assets/balloon_3d.png";
import birthdaycakeImage from "../../assets/birthday_cake_3d.png";
import catImage from "../../assets/cat_3d.png";
import cherryblossomImage from "../../assets/cherry_blossom_3d.png";
import confettiballImage from "../../assets/confetti_ball_3d.png";
import hamsterImage from "../../assets/hamster_3d.png";
import heartsuitImage from "../../assets/heart_suit_3d.png";
import pandaImage from "../../assets/panda_3d.png";
import redHeartImage from "../../assets/red_heart_3d.png";
import ribbonImage from "../../assets/ribbon_3d.png";
import roseImage from "../../assets/rose_3d.png";
import sparklesImage from "../../assets/sparkles_3d.png";
import starImage from "../../assets/star_3d.png";
import tulipImage from "../../assets/tulip_3d.png";
import wrappedgiftImage from "../../assets/wrapped_gift_3d.png";

//vids
import billuVid from "../../assets/memories/billu.mp4";
import cherryVid from "../../assets/memories/cherry.mp4";
import eyeImage from "../../assets/memories/eye (1).jpg";
import frehshersImage from "../../assets/memories/freshers (1).jpg";
import kidImage from "../../assets/memories/kid (1).jpg";
import notlookingImgae from "../../assets/memories/notlooking(1).jpg";
import pinkFlowerVid from "../../assets/memories/pinkflower.mp4";
import rasmalaiVid from "../../assets/memories/rasmalai.mp4";
import sharmanaImage from "../../assets/memories/sharmana (1).jpg";
import sunImage from "../../assets/memories/sun (1).jpg";
import tedigardanImage from "../../assets/memories/tedigardan (1).jpg";
import watchingFlowersImage from "../../assets/memories/watchingflowers (1).jpg";

const memories = [
  {
    id: 1,
    type: "image",
    src: kidImage,
    caption: "til nahi tha na us time laadle",
  },
  {
    id: 2,
    type: "video",
    src: billuVid,
    caption: "nakchadi billi hai ye(just kidding)",
  },
  {
    id: 3,
    type: "video",
    src: cherryVid,
    caption: "cherry hi kahde laadle",
  },
  {
    id: 4,
    type: "image",
    src: eyeImage,
    caption: "A gift from God, sambhal ke rakh inhe",
  },
  {
    id: 5,
    type: "image",
    src: frehshersImage,
    caption: "freshers ki photo laga di aise hi lol",
  },
  {
    id: 6,
    type: "image",
    src: notlookingImgae,
    caption: "tor tor phool tor you Phool(pagal)",
  },
  {
    id: 7,
    type: "video",
    src: pinkFlowerVid,
    caption: "ohh swarg me hu kya main",
  },
  {
    id: 8,
    type: "video",
    src: rasmalaiVid,
    caption: "Laadle iske liye ho sake to maafi, Galti se ho gaya tha(🙂🙂)",
  },
  {
    id: 9,
    type: "image",
    src: sharmanaImage,
    caption: "yaar ye wala emoji 🤭 lag ri hai",
  },
  {
    id: 10,
    type: "image",
    src: sunImage,
    caption: "Dhoop sek laadle , Dadi ki baat man maniyo kabhi(hatttt)",
  },
  {
    id: 11,
    type: "image",
    src: tedigardanImage,
    caption: "Are Thanks laadle, accha Phool hai 😂😂😂",
  },
  {
    id: 12,
    type: "image",
    src: watchingFlowersImage,
    caption: "ek photo sirf flowers ki",
  },
];

const leftLane = [
  {
    id: "l1",
    src: balloonImage,
    style: { top: "5%", left: "5%", width: "55px", animationDelay: "0s" },
  },
  {
    id: "l2",
    src: catImage,
    style: { top: "20%", left: "10%", width: "50px", animationDelay: "1.5s" },
  },
  {
    id: "l3",
    src: ribbonImage,
    style: { top: "35%", left: "2%", width: "45px", animationDelay: "0.5s" },
  },
  {
    id: "l4",
    src: pandaImage,
    style: { top: "50%", left: "8%", width: "55px", animationDelay: "2s" },
  },
  {
    id: "l5",
    src: redHeartImage,
    style: { top: "65%", left: "4%", width: "40px", animationDelay: "1s" },
  },
  {
    id: "l6",
    src: wrappedgiftImage,
    style: { top: "80%", left: "6%", width: "50px", animationDelay: "0s" },
  },
  {
    id: "l7",
    src: sparklesImage,
    style: { top: "92%", left: "3%", width: "35px", animationDelay: "1.2s" },
  },
];

const rightLane = [
  {
    id: "r1",
    src: birthdaycakeImage,
    style: { top: "10%", right: "5%", width: "60px", animationDelay: "0.5s" },
  },
  {
    id: "r2",
    src: confettiballImage,
    style: { top: "25%", right: "8%", width: "50px", animationDelay: "1s" },
  },
  {
    id: "r3",
    src: hamsterImage,
    style: { top: "40%", right: "3%", width: "55px", animationDelay: "0s" },
  },
  {
    id: "r4",
    src: starImage,
    style: { top: "55%", right: "10%", width: "40px", animationDelay: "1.8s" },
  },
  {
    id: "r5",
    src: heartsuitImage,
    style: { top: "70%", right: "5%", width: "45px", animationDelay: "0.8s" },
  },
  {
    id: "r6",
    src: tulipImage,
    style: { top: "85%", right: "2%", width: "50px", animationDelay: "1.5s" },
  },
  {
    id: "r7",
    src: cherryblossomImage,
    style: { top: "95%", right: "7%", width: "45px", animationDelay: "0.2s" },
  },
  {
    id: "r8",
    src: roseImage,
    style: { top: "3%", right: "12%", width: "40px", animationDelay: "2.2s" },
  },
];

const PhotoGallery = () => {
  return (
    <div className="gallery-container">
      {/* --- LEFT DECORATION LANE --- */}
      <div className="side-lane left-lane">
        {leftLane.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt="deco"
            className="lane-icon"
            // FIX: Use item.style directly. This passes top, left, width AND animationDelay
            style={item.style}
          />
        ))}
      </div>

      {/* --- RIGHT DECORATION LANE --- */}
      <div className="side-lane right-lane">
        {rightLane.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt="deco"
            className="lane-icon"
            // FIX: Use item.style directly
            style={item.style}
          />
        ))}
      </div>

      <h2 className="gallery-title">Memories Lane 📸</h2>

      <div className="gallery-grid">
        {memories.map((item, index) => (
          <div
            key={item.id}
            className="polaroid"
            style={{
              transform: `rotate(${index % 2 === 0 ? "2deg" : "-2deg"})`,
            }}
          >
            <div className="media-frame">
              {item.type === "video" ? (
                <video src={item.src} controls className="media-content" />
              ) : (
                <img src={item.src} alt="Memory" className="media-content" />
              )}
            </div>
            <p className="caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

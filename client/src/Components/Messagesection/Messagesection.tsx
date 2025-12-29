import React from "react";
import "./Messagesection.css";

import catImage from "../../assets/cat_3d.png";
import sunflowerImage from "../../assets/sunflower_3d.png";
import heartImage from "../../assets/red_heart_3d.png";
import balloonImage from "../../assets/balloon_3d.png";
import giftImage from "../../assets/wrapped_gift_3d.png";
import catfaceImage from "../../assets/cat_face_3d.png";
import butterflyImage from "../../assets/butterfly_3d.png";

import birthdaycakeImage from "../../assets/birthday_cake_3d.png";
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

const MessageSection = () => {
  const noteCards = [
    {
      id: 1,
      rotation: -3,
      pin: sunflowerImage,
      title: "To phir kuchh baate 🥰",
      body: [
        "Sabse Pahle to A VERY VERY.... 20th HAPPY BIRTHDAY LAADLI, Bhagwaan teri saari ichhayen poori kare, Tujhe vo sab mile jo tu chahti hai",
        "Tu jaldi hi Switzerland 🏔️ jaaye, Japan 🌸 bhi, Aur poori duniya 🌏",
        "Tujhe Har type ki Cat 😻 mile, Persian, Egyptian, aur jitni bhi type hain(sambhal legi kya itni 😻 waise, chal jo bhi hai)",
      ],
    },
    {
      id: 2,
      rotation: 2,
      pin: catfaceImage,
      title: "Pleaseeeeeeeee! 🫠",
      body: [
        "Apni Diet ka dhyan rakha kar, Mujhe sahi me bohot bura lagta hai jab bhi PCOS ka naam ata hai, laadli tu ye ch*tiya bimari deserve nahi karti, ise sahi karle pleaseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "Basically mujhe lagta hai ki Diet hi main reason hai, to yaar kha liya kar, par kam matlab once a weak(bas kah raha hun, baaki marzi hai)",
      ],
    },
    {
      id: 3,
      rotation: -2,
      pin: butterflyImage,
      title: "Maafiyan 😗",
      body: [
        "📌 Yaar shuru me rude hone k liye",
        "📌 Zor se bolne ke liye",
        "📌 Jab tu scribble day wale din meri shirt pe likh ri thi tab maine gande tareeke se bol diya tha uske liye",
        "📌 Agar koi aur baat ka bhi laga ho to bhi(race me tujhe jeetne nahi diya iski maafi nahi chahiye, haari thi tu 🥱)",
      ],
    },
    {
      id: 4,
      rotation: 4,
      pin: giftImage,
      title: "Eternal 🤝",
      body: [
        "Mere college ka one of the best (god) gift and experience hai tu, Bohot positivity milti hai mujhe tujhse thanks yaar 🤝",
        "Kabhi bhi weak baate mat kara kar, vo phone waali jaise, Mai tujhe hamesha strongest dekhna chahta hun, tujhse to motivation milti hai mujhe(Agar Koi dikkat ho to share kar hi lenge par yaar aisa nahi ki mujhse nahi hoga , hattttttttttttt,sapne me bhi mat socha kar ye weak points)🤝",
        "Aur title Eternal is liye ki jab tak apan hain ek dusre ki life me tab tak mujhe tu aise hi chahiye kya pata hamesha rahe , kya pata na rahe par jo bhi hai mere liye to vo time hi Eternal hai(Baaki Eternal jaisa kuchh nahi hota)🤝",
      ],
    },
    {
      id: 5,
      rotation: -1,
      pin: catImage,
      title: "Happy Birthday! 🥂",
      body: [
        "At the End",
        "HAPPY BIRTHDAY! once again, enjoy the day and life ahead",
      ],
      signature: "Cherry",
    },
  ];

  return (
    <div className="message-container">
      {/* --- LEFT DECORATION LANE --- */}
      <div className="side-lane left-lane">
        {leftLane.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt="deco"
            className="lane-icon"
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
            style={item.style}
          />
        ))}
      </div>

      {noteCards.map((card) => (
        <div
          key={card.id}
          className="paper-card"
          // This applies the unique tilt to each card
          style={{ transform: `rotate(${card.rotation}deg)` }}
        >
          {/* The Pin/Sticker Decoration */}
          <div className="pin-decoration">
            <img src={card.pin} alt="decoration" className="pin-icon" />
          </div>

          <h2 className="message-title">{card.title}</h2>

          <div className="message-body">
            {card.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Footer */}
          <div className="message-footer">
            {card.signature ? (
              <>
                <p className="yb">Your's Bhaichara,</p>
                <p className="signature">{card.signature}</p>
                <span>🍒</span>
                <p className="heh">
                  (Aur Haan, Websites Build Hoti hain 😎, create nahi)
                </p>
              </>
            ) : (
              <span className="page-number">~ {card.id} ~</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSection;

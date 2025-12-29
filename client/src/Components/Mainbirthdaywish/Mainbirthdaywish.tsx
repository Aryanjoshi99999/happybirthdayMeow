import React, { useEffect, useRef, useState, useMemo } from "react";
import "./Mainbirthdaywish.css";

// confetti
import Confetti from "react-confetti";

// audios
import hbdSong from "../../assets/audios/happy-birthday-357371.mp3";

// 3d emojies
import balloonImage from "../../assets/balloon_3d.png";
import birthdaycakeImage from "../../assets/birthday_cake_3d.png";
import catImage from "../../assets/cat_3d.png";
import cherryblossomImage from "../../assets/cherry_blossom_3d.png";
import confettiballImage from "../../assets/confetti_ball_3d.png";
import hamsterImage from "../../assets/hamster_3d.png";
import pandaImage from "../../assets/panda_3d.png";
import redHeartImage from "../../assets/red_heart_3d.png";
import ribbonImage from "../../assets/ribbon_3d.png";
import roseImage from "../../assets/rose_3d.png";
import sunflowerImage from "../../assets/sunflower_3d.png";
import tulipImage from "../../assets/tulip_3d.png";
import hibiscusImage from "../../assets/hibiscus_3d.png";
import wrappedgiftImage from "../../assets/wrapped_gift_3d.png";

const Mainbirthdaywish = () => {
  const [started, setStarted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const audioRef = useRef(new Audio(hbdSong));

  // --- RANDOM MOTION LOGIC ---
  // Positions are fixed, but speed (duration) and start time (delay) are random
  const floatingStyles = useMemo(() => {
    const random = (min, max) => Math.random() * (max - min) + min;

    return {
      ribbon: {
        top: "20%",
        left: "20%",
        width: "60px",
        animationDuration: `${random(3, 5)}s`,
        animationDelay: `${random(0, 2)}s`,
      },
      balloon: {
        top: "22%",
        left: "70%",
        width: "65px",
        animationDuration: `${random(4, 6)}s`,
        animationDelay: `${random(0, 2)}s`,
      },
      gift: {
        bottom: "10%",
        left: "5%",
        width: "70px",
        animationDuration: `${random(3, 5)}s`,
        animationDelay: `${random(0, 2)}s`,
      },
      cake: {
        bottom: "10%",
        right: "5%",
        width: "70px",
        animationDuration: `${random(4.5, 7)}s`,
        animationDelay: `${random(0, 2)}s`,
      },
      confettiBall: {
        top: "20%",
        left: "48%",
        width: "60px",
        opacity: 0.8,
        animationDuration: `${random(3, 5.5)}s`,
        animationDelay: `${random(0, 2)}s`,
      },
    };
  }, []);

  const detectScreenSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectScreenSize);
    return () => {
      window.removeEventListener("resize", detectScreenSize);
    };
  }, []);

  const startCelebration = () => {
    audioRef.current.play().catch((error) => {
      console.log("Audio Play failed", error);
    });
    audioRef.current.loop = true;

    setFadeOut(true);

    setTimeout(() => {
      setStarted(true);
      setShowConfetti(true);
    }, 1000);

    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  return (
    <div className="Bottomlayer">
      {!started && (
        <div className={`start-screen ${fadeOut ? "fade-exit" : ""}`}>
          <button className="start-button" onClick={startCelebration}>
            <img src={wrappedgiftImage} alt="Gift" />
          </button>
          <p className="start-hint">Turn up your volume and click!</p>
        </div>
      )}

      {started && (
        <div className="fade-enter-container">
          <Confetti
            width={windowDimension.width}
            height={windowDimension.height}
            recycle={showConfetti}
            numberOfPieces={200}
            gravity={0.2}
          />
          <div className="Middlelayer">
            <img
              src={ribbonImage}
              alt="Ribbon"
              className="floating-icon"
              style={floatingStyles.ribbon}
            />

            <img
              src={balloonImage}
              alt="ballon"
              className="floating-icon"
              style={floatingStyles.balloon}
            />

            <img
              src={wrappedgiftImage}
              alt="Gift"
              className="floating-icon"
              style={floatingStyles.gift}
            />

            <img
              src={birthdaycakeImage}
              alt="Cake"
              className="floating-icon"
              style={floatingStyles.cake}
            />

            <img
              src={confettiballImage}
              alt="Confetti"
              className="floating-icon"
              style={floatingStyles.confettiBall}
            />
          </div>

          <div className="Toplayer">
            <h1 className="title">Happy Birthday Meow!</h1>

            <div className="icon-row">
              <img src={redHeartImage} alt="Redheart" className="icon-small" />
              <img src={catImage} alt="Cat" className="icon-small" />
              <img src={pandaImage} alt="Panda" className="icon-small" />
              <img src={hamsterImage} alt="Hamster" className="icon-small" />
              <img src={redHeartImage} alt="Redheart" className="icon-small" />
            </div>

            <p className="message">
              The craziest, baatuni, smart, kind, bold, Bolne wali Jaatni Biloti
              (Paani Maarunga Kyunki aaj bhai ka birth day hai 🕺🏻yayyyyyy! ,
              neeche ja ab)
            </p>

            <div className="icon-row">
              <img
                src={cherryblossomImage}
                alt="Flower"
                className="icon-small"
              />
              <img src={tulipImage} alt="Tulip" className="icon-small" />
              <img src={hibiscusImage} alt="Hibiscus" className="icon-small" />
              <img
                src={sunflowerImage}
                alt="Sunflower"
                className="icon-small"
              />
              <img src={roseImage} alt="Rose" className="icon-small" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mainbirthdaywish;

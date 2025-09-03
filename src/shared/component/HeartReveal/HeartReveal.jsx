
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import WeddingPhoto from "../../../assets/image/istockphoto-2090025382-612x612 (1).jpg";
import heart from "../../../assets/image/heart-removebg-preview.png";
import "./HeartReveal.scss";
import BootstrapCarousel from "../Carousel/carousel";

const HEART_PATH =
"M50 90C50 82 10 65 12 40C10 29 24 16 35 21C45 26 40 25 50 33C50 38 56 19 70 21C76 20 90 28 90 40C90 65 50 82 50 90Z";

const HeartReveal = () => {
  const [clickCount, setClickCount] = useState(0);
  const [done, setDone] = useState(false);
  const threshold = 3;
  const progress = Math.round((clickCount / threshold) * 100);

  useEffect(() => {
    if (!done) return;

    const duration = 30 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }
      const particleCount = Math.floor(50 * (timeLeft / duration));
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, [done]);

  const handleClick = () => {
    if (done) return;
    const next = Math.min(clickCount + 1, threshold);
    setClickCount(next);
    if (next >= threshold) setTimeout(() => setDone(true), 160);
  };

  return (
    <div className="heart-reveal-container">
      <AnimatePresence>
        {!done ? (
          <motion.div
            key="heart"
            className="heart-wrapper"
            onClick={handleClick}
            role="button"
            aria-label="Нажмите сердце"
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <svg
              viewBox="0 0 95 95"
              preserveAspectRatio="xMidYMid meet"
              className="heart-svg"
              aria-hidden="true"
            >
              <motion.path
                d={HEART_PATH}
                className="heart-base"
                initial={false}
                animate={{ scale: progress >= 100 ? 1.03 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              />
              <defs>
                <clipPath id="heartClip">
                  <motion.rect
                    x="0"
                    initial={false}
                    animate={{ y: 100 - progress, height: progress }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    width="90"
                    rx="0"
                    ry="0"
                  />
                </clipPath>
              </defs>
              <motion.path
                d={HEART_PATH}
                className="heart-fill"
                clipPath="url(#heartClip)"
                initial={false}
                animate={{ opacity: 1, scale: progress >= 100 ? 1.03 : 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </svg>

            <img src={heart} alt="heart foreground" className="heart-foreground" />

            <motion.div
              className="progress-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="photo"
            className="photo-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <img src={WeddingPhoto} alt="Фото" className="photo" /> */}
            <BootstrapCarousel/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeartReveal;

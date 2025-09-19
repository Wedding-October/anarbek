import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import heart from "../../../assets/image/heart-removebg-preview.png";
import "./HeartReveal.scss";
import BootstrapCarousel from "../Carousel/carousel";

const HEART_PATH =
  "M50 90C50 82 10 65 12 40C10 29 24 16 35 21C45 26 40 25 50 33C50 38 56 19 70 21C76 20 90 28 90 40C90 65 50 82 50 90Z";

const CONFETTI_DURATION = 5000; //длительность
const CLICK_THRESHOLD = 20; // количество кликов

const HeartReveal = () => {
  const [clickCount, setClickCount] = useState(0);
  const [done, setDone] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const progress = Math.round((clickCount / CLICK_THRESHOLD) * 100);

  const launchConfetti = useCallback(() => {
    const animationEnd = Date.now() + CONFETTI_DURATION;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = Math.floor(50 * (timeLeft / CONFETTI_DURATION));
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (done) {
      const stopConfetti = launchConfetti();
      return stopConfetti;
    }
  }, [done, launchConfetti]);

  const handleClick = () => {
    if (done) return;
    setShowHint(false);

    const next = Math.min(clickCount + 1, CLICK_THRESHOLD);
    setClickCount(next);

    if (next >= CLICK_THRESHOLD) {
      setTimeout(() => setDone(true), 160);
    }
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
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <svg
              viewBox="0 0 95 95"
              preserveAspectRatio="xMidYMid meet"
              className="heart-svg"
              aria-hidden="true"
            >
              <motion.path d={HEART_PATH} className="heart-base" />

              <defs>
                <mask id="heartMask">
                  {/* теперь чёрный = видно */}
                  <rect width="100%" height="100%" fill="black" />
                  {/* белый прямоугольник будет скрывать (от верха к низу) */}
                  <motion.rect
                    x="0"
                    width="90"
                    initial={false}
                    animate={{ y: 100 - progress, height: progress }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    fill="white"
                  />
                </mask>
              </defs>

              <motion.path
                d={HEART_PATH}
                className="heart-fill"
                mask="url(#heartMask)"
              />
            </svg>


            <img src={heart} alt="heart foreground" className="heart-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="photo"
            className="photo-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <BootstrapCarousel />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHint && (
          <motion.div
            className="hint-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p >Покликайте по сердцу</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeartReveal;

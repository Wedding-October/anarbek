import React, { useEffect, useState } from "react";

import s from "./timer.module.scss";

const Timer = () => {
  const formatNumber = (num) => String(num).padStart(2, "0");

  const calculateTimeLeft = () => {
    const weddingDate = new Date("October 12, 2025 18:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = weddingDate - now;

    return {
      weeks: formatNumber(
        Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7))
      ),
      days: formatNumber(
        Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
        )
      ),
      hours: formatNumber(
        Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ),
      minutes: formatNumber(
        Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
      ),
      seconds: formatNumber(Math.floor((timeRemaining % (1000 * 60)) / 1000)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={s.countdown}>
      <div className={s.countdownItem}>
        <span className={s.number}>{timeLeft.weeks}</span>
        <span className={s.label}>недель</span>
      </div>
      <div className={s.countdownItem}>
        <span className={s.number}>{timeLeft.days}</span>
        <p className={s.label}>дней</p>
      </div>
      <div className={s.countdownItem}>
        <span className={s.number}>{timeLeft.hours}</span>
        <p className={s.label}>часов</p>
      </div>
      <div className={s.countdownItem}>
        <span className={s.number}>{timeLeft.minutes}</span>
        <p className={s.label}>минут</p>
      </div>
      <div className={`${s.countdownItem} ${s.small}`}>
        <span className={s.number}>{timeLeft.seconds}</span>
        <p className={s.label}>секунд</p>
      </div>
    </div>
  );
};

export default Timer;

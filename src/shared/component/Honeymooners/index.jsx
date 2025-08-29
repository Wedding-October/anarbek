import s from "./honeymooners.module.scss";

const Honeymooners = () => {
  return (
    <>
      <div className={s.backgroundImage}></div>
      <div className={s.card}>
        <h1 className={s.title}>Анарбек</h1> 
          <br />
        <h1 className={s.title}>Элина</h1>
        <p className={s.text}>ПРИГЛАШАЕМ НА СВАДЬБУ</p>

        <div className={s.dateBlock}>
          <p className={s.month}>октябрь</p>
          <div className={s.dateContainer}>
            <p className={s.weekday}>ВОСКРЕСЕНЬЕ</p>
            <p className={s.day}>12</p>
            <p className={s.time}>18:00</p>
          </div>
          <p className={s.year}>2025</p>
        </div>
      </div>
    </>
  );
};

export default Honeymooners;

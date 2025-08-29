import { useState, useEffect, useRef } from "react";
import s from "./invitation.module.scss";
import emailjs from "emailjs-com";


const Invitation = () => {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSendMessage = async () => {
    if (!message.trim()) {
      alert("Введите сообщение");
      return;
    }
  
    try {
      await emailjs.send(
        "service_4az8pj1", 
        "template_gs84fol", 
        { message },        
        "Qse-t0eA0xwqNCQm3"  
      );
      alert("Сообщение отправлено!");
      setMessage(""); 
    } catch (error) {
      console.error(error);
      alert("Ошибка при отправке");
    }
  };

  return (
    <div
      className={`${s.container} ${isVisible ? s.visible : ""}`}
      ref={sectionRef}
    >
      <div className={s.backgroundImage}></div>
      <div className={s.wrapperText}>
        <div className={s.wrapper}>
          <div className={s.title}>Дорогой</div>
          <div className={s.subTitle}>Гость!</div>
          <div className={s.invitation}>ПОДТВЕРЖДЕНИЕ</div>
          <div className={s.pleaseInvitation}>
            Пожалуйста подтвердите свое <br /> присутствие до&nbsp;
            <span className={s.date}>28.09.2025</span>
          </div>
          <div className={s.wedding}>Ждем Вас на свадьбе!</div>

          <div className={s.confirmSection}>
            <textarea
              placeholder="Введите ваши фамилию, имя и отчество, а также укажите, кем вы являетесь для жениха или невесты"
              value={message}
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              className={s.textareaConfirm}
            />

            <button className={s.btn} onClick={handleSendMessage}>
              Подтвердить
            </button>
          </div>
        </div>

        {/* <textarea name="textarea" id="message" placeholder="Введите ваши фамилию, имя и отчество, а также укажите, кем вы являетесь для жениха или невесты."></textarea> */}

        {/* <button className={s.btn}>
          <span className={s.checkmark}>
            <div className={s.checkmark_stem}></div>
            <div className={s.checkmark_kick}></div>
          </span>
          Подтвердить
        </button> */}

        {/* <div className={s.chat} onClick={toggleChat}>
          <img
            className={s.icon}
            src="src/assets/image/chat.svg"
            alt="Chat Icon"
          />
          Добавить сообщение для жениха и невесты
        </div> */}

        {/* {isChatOpen && (
          <div className={s.chatBox}>
            <textarea
              className={s.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className={s.giftSection}>
              {isGiftActive && (
                <select
                  value={selectedAmount}
                  onChange={handleAmountChange}
                  className={s.selectGift}
                >
                  <option value="1000 сом">1 000 сом</option>
                  <option value="2000 сом">2 000 сом</option>
                  <option value="3000 сом">3 000 сом</option>
                  <option value="4000 сом">4 000 сом</option>
                  <option value="5000 сом">5 000 сом</option>
                  <option value="7000 сом">7 000 сом</option>
                  <option value="10000 сом">10 000 сом</option>
                  <option value="15000 сом">15 000 сом</option>
                  <option value="20000 сом">20 000 сом</option>
                  <option value="50000 сом">50 000 сом</option>
                  <option value="80000 сом">80 000 сом</option>
                  <option value="100000 сом">100 000 сом</option>
                </select>
              )}
              <label className={s.label}>
                Денежный подарок
                <input type="checkbox" onChange={handleGiftToggle} />
              </label>
            </div>

            <button className={s.sendButton} onClick={handleSendMessage}>
              <img
                className={s.icon}
                src="src/assets/image/telegram.svg"
                alt="Send"
              />
              Отправить
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Invitation;

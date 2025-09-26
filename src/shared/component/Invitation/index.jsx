// import { useState, useEffect, useRef } from "react";
// import s from "./invitation.module.scss";
// import emailjs from "emailjs-com";


// const Invitation = () => {
//   const [message, setMessage] = useState("");
//   const [isVisible, setIsVisible] = useState(false);

//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const handleSendMessage = async () => {
//     if (!message.trim()) {
//       alert("Введите сообщение");
//       return;
//     }
  
//     try {
//       await emailjs.send(
//         "service_4az8pj1", 
//         "template_gs84fol", 
//         { message },        
//         "Qse-t0eA0xwqNCQm3"  
//       );
//       alert("Сообщение отправлено!");
//       setMessage(""); 
//     } catch (error) {
//       console.error(error);
//       alert("Ошибка при отправке");
//     }
//   };
  

//   return (
//     <div
//       className={`${s.container} ${isVisible ? s.visible : ""}`}
//       ref={sectionRef}
//     >
//       <div className={s.backgroundImage}></div>
//       <div className={s.wrapperText}>
//         <div className={s.wrapper}>
//           <div className={s.title}>Дорогой</div>
//           <div className={s.subTitle}>Гость!</div>
//           <div className={s.invitation}>ПОДТВЕРЖДЕНИЕ</div>
//           <div className={s.pleaseInvitation}>
//             Пожалуйста подтвердите свое <br /> присутствие до&nbsp;
//             <span className={s.date}>28.09.2025</span>
//           </div>
//           <div className={s.wedding}>Ждем Вас на нашей свадьбе!</div>

//           <div className={s.confirmSection}>
//             <textarea
//               placeholder="Введите ваши фамилию, имя и отчество, а также укажите, кем вы являетесь для жениха или невесты"
//               value={message}
//               rows={5}
//               onChange={(e) => setMessage(e.target.value)}
//               className={s.textareaConfirm}
//             />

//             <button className={s.btn} onClick={handleSendMessage}>
//               Подтвердить
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
///////////////////////////////////////



import { useState, useEffect, useRef } from "react";
import s from "./invitation.module.scss";
import emailjs from "emailjs-com";
import { RingLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Invitation = () => {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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
      toast.error("Введите сообщение!", { position: "top-center" });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_4az8pj1",
        "template_gs84fol",
        { message },
        "Qse-t0eA0xwqNCQm3"
      );
      toast.success(" Сообщение отправлено!", { position: "top-center" });
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error(" Ошибка при отправке!", { position: "top-center" });
    } finally {
      setLoading(false);
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
          <div className={s.wedding}>Ждем Вас на нашей свадьбе!</div>

          <div className={s.confirmSection}>
            <textarea
              placeholder="Введите ваши фамилию, имя и отчество, а также укажите, кем вы являетесь для жениха или невесты"
              value={message}
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              className={s.textareaConfirm}
            />

            {loading ? (
              <div className={s.loaderWrapper}>
                <RingLoader color="#36d7b7" size={60} />
              </div>
            ) : (
              <button className={s.btn} onClick={handleSendMessage}>
                Подтвердить
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Контейнер для тостов */}
      <ToastContainer />
    </div>
  );
};

export default Invitation;


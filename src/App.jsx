import s from "./App.module.scss";
import Honeymooners from "./shared/component/Honeymooners";
import Invitation from "./shared/component/Invitation";
import Location from "./shared/component/Location";
import Timer from "./shared/component/Timer";
import HeartReveal from "./shared/component/HeartReveal/HeartReveal";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Honeymooners />
        <Timer />
      </div>
      <HeartReveal/>
 
      <Invitation />
  
      
      <Location />
    </div>
  );
}

export default App;

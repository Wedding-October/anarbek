import styles from "./location.module.scss";
import { color } from "framer-motion";
import { YMaps, Map, Placemark , ZoomControl} from "@pbe/react-yandex-maps";
import { map } from "framer-motion/client";
import location from "../../../assets/image/location.png"


const Location = () => {
  return (
    <div id="location" className={styles.container} style={{zIndex:1}}>
      
      <a  style={{textDecoration: "none"}}href="https://2gis.kg/bishkek/inside/15763234351097281/firm/70000001047984986?m=74.597365%2C42.87277%2F17.86">
          <h3 
           className="text-h3"
            style={{fontFamily: "Extrano", color: "black"}} 
            >Адресс проведения торжества: ул.Токтогула 125/1
             </h3></a>
      {/* <a href="https://2gis.kg/bishkek/inside/15763234351097281/firm/70000001047984986?m=74.597365%2C42.87277%2F17.86" target="_blank" rel="noopener noreferrer">
      <img 
        src={location}
        alt="" 
        style={{ width: "60px", cursor: "pointer" }} 
      />
    </a>

      <a
        href="https://2gis.kg/bishkek/inside/15763234351097281/firm/70000001047984986?m=74.597365%2C42.87277%2F17.86"
        className={styles.restaurant}
      />
      <a
        href="https://2gis.kg/bishkek/inside/15763234351097281/firm/70000001047984986?m=74.597365%2C42.87277%2F17.86"
        className={styles.address}
      />

      <div className={styles.mapTwoGis}>
      
        {/* <MapWrapper /> */}
        <div style={{ width: "100%", height: "50vh", zIndex: 1 }}>
        <a href="https://2gis.kg/bishkek/inside/15763234351097281/firm/70000001047984986?m=74.597365%2C42.87277%2F17.86">
        <div style={{ position: "relative", width: "100%", height: "50vh" }}> *
  <YMaps>
    <Map
      defaultState={{ center: [42.872604, 74.597629], zoom: 15 }}
      width= "100%"
      height="60%"
      options={{
        suppressMapOpenBlock: true,
      }}
    >
      <ZoomControl options={{ float: "left" }} />
      <Placemark geometry={[42.872604, 74.597629]} />
    </Map>
  </YMaps>


  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "transparent",
      zIndex: 10,
    }}
  />
</div>
</a>
      </div>  
          
    </div>

    
  );
};

export default Location;

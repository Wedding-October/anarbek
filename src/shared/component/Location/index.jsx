import MapWrapper from "./map";

import styles from "./location.module.scss";
import { color } from "framer-motion";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Location = () => {
  return (
    <div id="location" className={styles.container}>
      <a  style={{textDecoration: "none"}}href="https://2gis.kg/bishkek/inside/15763234351097281/firm/70000001047984986?m=74.597365%2C42.87277%2F17.86">
          <h3 
            style={{fontFamily: "AgoniaLyubviRegular", color: "black"}} 
            >Адресс проведения торжества: ул.Токтогулова 125/1
             </h3></a>
      <a href="https://2gis.kg/bishkek/inside/15763234351097281/firm/70000001047984986?m=74.597365%2C42.87277%2F17.86" target="_blank" rel="noopener noreferrer">
      <img 
        src="/anarbek/src/assets/image/location.png" 
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
        <div style={{ width: "100%", height: "100vh" }}>
      <YMaps>
        <Map
          defaultState={{ center: [ 42.872604,74.597629 ], zoom: 15 }}
          width="100%"
          height="100%"
        >
          <Placemark geometry={[42.872604,74.597629 ]} />
          
        </Map>
      </YMaps>
      
    </div>
      </div>
      
     
    </div>
    
  );
};

export default Location;

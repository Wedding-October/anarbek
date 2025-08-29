import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { memo, useState, useEffect } from "react";


const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",    
  overflow: "hidden",
 
}

const center = {
  lat: 42.872604,
  lng: 74.597629,
};

const MapWrapper = memo(function MapWrapper() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyC-vYJBgO7iGfrwGLsHda9VwBWKgOxjAHA">
      {mapLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17.5}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </LoadScript>
  
  )
});




export default MapWrapper;

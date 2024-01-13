import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
// PRAGAMTIC nagigation is the movement into another page without living a page.
const Map = () => {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  {
    /* the useSearchParams is similar to the useState Hook */
  }
  const [searchParams] = useSearchParams();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  useEffect(function(){
 if (mapLat && mapLng) setMapPosition([mapLat, mapLng])
  }, [mapLat, mapLng, setMapPosition])
  return (
    //remember to remove the onclik handler .fr/hot
    <div
      className={styles.mapContainer}
     
    >
      <MapContainer
        center={mapPosition}
        // center={[mapLat, mapLng]
        // zoom={13}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          // change to map.org to h
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <spam>{city.emoji}</spam>
              <spam>{city.cityName}</spam>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};
function ChangeCenter({position}) {
  const map = useMap()
  map.setView(position)
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      console.log(e);
    },
  });
}
export default Map;

import React, {useState } from 'react';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, Popup} from "react-map-gl";
import CustomPopup from "./CustomPopup";
import "../../Css/Venue.css";

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGFuc3dhbGtlcjI4IiwiYSI6ImNrems4enN1OTBlYWYydXRhNTgzem1qcGUifQ.uO6MkZn2pV7qHXwpX8IpKw';

export default function App() {

  const [visibility, setVisibility] = useState(false);
  const [showPopup, togglePopup] = React.useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (

    
    <Map
      initialViewState={{
        longitude: -3.193370436780981,
        latitude: 55.95144401899404,
        zoom: 12,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      attributionControl= "false"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      style={{  height: "50vh", width: "80%", margin: 'auto', top: '2em'}}
    >

{showPopup && (
        <Popup
          latitude={10.86195853994233}
          longitude={106.74362380706191}
          closeButton={true}
          closeOnClick={true}
          onClose={() => togglePopup(false)}
          anchor="top-right"
        >
          <div>Pop up marker</div>
        </Popup>
      )}

      <Marker
        longitude={-3.196712177678664}
        latitude={55.95513939640071}
      >
        <img
          onClick={() => popupCloseHandler(true)}
          style={{ height: 50, width: 50 }}
          src="https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png"
          alt="Location"
        />
      </Marker>
      <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="This is the wedding venue"
          >
          <h1>Hello This is the wedding venue</h1>
          <h2>wedding venue!</h2>
        </CustomPopup>
    </Map>
    
    );
}
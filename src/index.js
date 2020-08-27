import React from "react";
import { render } from "react-dom";
import GoogleMapReact from "google-map-react";
import "./style.css";

export default function App() {
  return (

      <div style={{ heigth: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAlG7aMgRekeTBsfwq088A2EhK7Ix9NGIA" }}
          defaultCenter={{ lat: 19.427142, lng: -99.167658 }}
          defaultZoom={10}
        >
        {}
        </GoogleMapReact>
      </div>
    
  );
}

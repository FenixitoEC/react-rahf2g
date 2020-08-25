import React from "react";
import { render } from 'react-dom';
import GoogleMapReact from 'google-map-react';
import './style.css';



export default function App(){

return(
  <div style={{heigth: "50vh", width: "90%"}}>
  <GoogleMapReact
  bootstrapURLKeys={{ key: 'AIzaSyDerbefQKeTqHad7fC0wFw0YoPYStEdmPU' }}
  defaultCenter={{lat : 19.427142, lng: -99.167658}}
  defaultZoom={10} 
  >
  </GoogleMapReact>
  </div>
);
}
render(<App />, document.getElementById('root'));
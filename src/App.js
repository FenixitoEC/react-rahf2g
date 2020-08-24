import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps';

const Map= (props)=>{
  return(
<GoogleMap 
defaultZoom={10} 
defaultCenter={{lat : 19.427142, lng: -99.167658}}
/>
  );
};

export default withScriptjs(
  withGoogleMap(
    Map
  )
)
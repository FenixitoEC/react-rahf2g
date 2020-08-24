import React, {Component} from "react";
import {render} from 'react-dom';
import Map from './App';
import credencials from './credencials'

import './style.css';

const mapURL= `https://maps.googleapis.com/mas/api/js?v=3.exp&key=${credencials.mapsKeys}`;
class App extends Component{
  constructor(){
    super();
    this.state ={
      name: 'React'
    };
  }
  render(){
    return (
      <div>
      <Map 
      googleMapURL= {mapURL}
      containerElement={ <div style={{height:'400px'}} />}
      mapElement= {<div styles={{height:'100%'}} />}
      loadingElement={ <p> cargando</p>}
      />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

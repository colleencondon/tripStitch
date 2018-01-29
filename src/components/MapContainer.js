import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import ReactDOM from 'react-dom';

export class Container extends React.Component {
  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat: 40.7485722, lng: -74.0068633}, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

    }
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}
  
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDfBDxMdthsDxdJLj4AcLbRg5dVdWuEovw'    
})(Container)
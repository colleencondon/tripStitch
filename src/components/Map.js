import React, { Component } from 'react';
export class Map extends React.Component{
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
    }
    // ..
  }
  
  render() {
    return (
      <div ref='map'>
      Loading map...
      </div>
    )
  }
}
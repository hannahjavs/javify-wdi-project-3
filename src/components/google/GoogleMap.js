/* global google */

import React from 'react';
// import mapStyles from '../config/mapStyles';

class GoogleMap extends React.Component {

  componentDidMount() {
    console.log(this.mapCanvas);
    this.map = new google.maps.Map(this.mapCanvas, {
      center: this.props.center || { lat: 51.51, lng: -0.08 },
      zoom: 14
      // styles: mapStyles
    });

    this.marker = new google.maps.Marker({
      position: this.props.center || { lat: 51.51, lng: -0.08 },
      map: this.map
    });
  }

  componentWillUnmount() {
    this.marker.setMap(null);
    this.marker = null;
    this.map = null;
  }

  render() {
    return (
      <div className="google-map" ref={element => this.mapCanvas = element}></div>
    );
  }
}

export default GoogleMap;

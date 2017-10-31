/* global google */
import React from 'react';
import mapStyles from '../config/mapStyles';

class GoogleMap extends React.Component {
  // In the following example, markers appear when the user clicks on the map.
  // Each marker is labeled with a single numbered character.

  componentDidMount() {

    function success(pos) {
      console.log(this);
      console.log(pos);
      this.map.panTo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      this.map.setZoom(14);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    // Position map according to users geolocation when FORM PAGE loads
    this.map = new google.maps.Map(this.mapCanvas, {
      zoom: 1, // displays the whole world
      styles: mapStyles,
      center: this.props.center
    });

    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressWalkingLayer: true,
      suppressMarkers: true,
      polylineOptions: {
        strokeColor: 'green',
        strokeOpacity: 1.0
      },
      map: this.map
    });

    // if there is a route created then,
    if (this.props.route) {
      // display and set the directions of the route,
      this.directionsDisplay.setDirections(this.props.route);
      // set the directions and the route onto the map
      this.directionsDisplay.setMap(this.map);
    }

    // // when there are markers created,
    // if (this.props.route) {
    //   // display and set the markers of the route,
    //   this.markersDisplay.setMarkers(this.props.route);
    //   // set the markers and the route onto the map.
    //   this.markersDisplay.setMap(this.map);
    // }

    // MARKERS ARRAY - SET TO EMPTY UNTIL USER CLICKS
    this.markers = [];

    const options = {
      enableHighAccuracy: true
    };

    // SELECTOR FOR IF THE USER PICKS THAT THEY DONT WANT THE SITE TO USE THEIR GEOLOCATION
    navigator.geolocation.getCurrentPosition(success.bind(this), error.bind(this), options);

    // This event listener calls addMarker() when the map is CLICKED.
    this.map.addListener('click', (e) => this.addMarker(e.latLng));
  }

  labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Marker labels
  labelIndex = 0; // Always starting at the label 'A' index which is 0

  renderDirections() {
    this.directionsDisplay.setMap(null);
    const directionsService = new google.maps.DirectionsService();

    console.log(this.markers.length);
    if(this.markers.length < 2) return false; // if there is less than two markers (no markers) then dont run the code to create a line

    //Set variable for start point marker - which will be [0] in the array:
    const startPoint = {lat: this.markers[0].position.lat(), lng: this.markers[0].position.lng()};
    console.log(startPoint);

    //Set variable for endPoint marker - which will be [1] in the array:
    const endPoint = {lat: this.markers[1].position.lat(), lng: this.markers[1].position.lng()};
    console.log(endPoint);

    //Turn the remaining markers into waypoints.
    //Slice off the first two markers (objects) in the array and make the rest of the array wayPoints:
    const wayPointArray = this.markers.slice(2).map(marker => {
      return {
        location: marker.getPosition(),
        stopover: true
      };
    });
    console.log(wayPointArray);


    directionsService.route({
      origin: new google.maps.LatLng(startPoint.lat, startPoint.lng),
      destination: new google.maps.LatLng(endPoint.lat, endPoint.lng),

      //Ternary - If the length of the wayPoints is more than 0 then draw a WALKING line. Otherwise don't do anything with the empty wayPointArray:
      waypoints: (wayPointArray.length > 0) ? wayPointArray : null,
      travelMode: 'WALKING',
      optimizeWaypoints: true
    }, response => {
      console.log('Here are the directions', response);
      // $scope.planInfo.distance = `${(response.routes[0].legs.reduce((sum, leg) => sum + leg.distance.value, 0)/1000).toFixed(1)} km`;
      // console.log($scope.planInfo.distance);
      this.directionsDisplay.setDirections(response);
      this.directionsDisplay.setMap(this.map);

      this.props.updateRoute(response);
    });
  }

  addMarker(location) {
    //Add the marker at the clicked location, and add the next-available label
    //From the array of alphabetical characters.
    const marker = new google.maps.Marker({
      position: location,
      label: this.labels[this.labelIndex++ % this.labels.length], //Increment the labelIndex everytime a marker is created
      map: this.map,
      draggable: true
    });

    marker.addListener('dragend', () => this.renderDirections());
    marker.addListener('click', () => {
      const index = this.markers.indexOf(marker);
      this.markers.splice(index, 1); //Remove one marker from the array INDEX
      marker.setMap(null);
      this.renderDirections();
      this.labelIndex--; //Decrement the labelIndex everytime a marker is removed
    });

    // PUSHING MARKERS INTO A MARKERS ARRAY
    this.markers.push(marker);

    //If there is more than one marker in the array then draw a line (renderDirections) - render the directions.
    if (this.markers.length > 1) {
      console.log('drawing line');
      this.renderDirections();
    }
  }

  componentWillUnmount() {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
    this.map = null;
  }

  render() {
    return (
      <div className="google-map" ref={element => this.mapCanvas = element}></div>
    );
  }
}

export default GoogleMap;

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LocationTracker } from '../../providers/location-tracker';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  positions = [];
  public mapOptions = {
    zoom: 10,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [
      {
        elementType: "labels",
        stylers: [{ visibility: "off"}]
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          { color: "#000000" },
          { visibility: "on" }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          { color: "#30ff00" },
          { visibility: "on" }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry.stroke",
        stylers: [
          { color: "#30ff00" },
          { visibility: "on" }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        stylers: [
          { color: "#e1ff8d" },
          { visibility: "on" }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "geometry.fill",
        stylers: [{ color: "#e1ff8d" }]
      },
      {
        featureType: "transit",
        elementType: "geometry.stroke",
        stylers: [
          { color: "#602400" },
          { visibility: "on" },
          { weight: 1.5 }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          { color: "#0e38e4" },
          { visibility: "on" }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.stroke",
        stylers: [
          { color: "#0e38e4" },
          { visibility: "on" }
        ]
      }
    ]
};

  constructor(public navCtrl: NavController, public locationTracker: LocationTracker) {

  }

  start(){
    this.locationTracker.startTracking();
  }

  stop(){
    this.locationTracker.stopTracking();
  }

  showRandomMarkers(){
    let myLat: number, myLng: number;
    this.positions = [];
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(pos){
        myLat = pos.coords.latitude;
        myLng = pos.coords.longitude;
        this.positions.push([myLat, myLng]);
      })

    }
  }

  showInfoWindow(marker) {
    marker.ng2MapComponent.openInfoWindow(
      'iw',    // id of InfoWindow
      marker,  // anchor for InfoWindow
      {        // local variables for InfoWindow
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
      }
    );
  }



}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
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
  constructor(public navCtrl: NavController) {

  }

}

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { RequestService } from './services/request.service';
import { TabsPage } from '../pages/tabs/tabs';
import { Ng2MapComponent } from 'ng2-map';


@Component({
  templateUrl: 'app.html',
  providers: [RequestService]
})
export class MyApp {
  rootPage = TabsPage;
  public mapCenter = 'Chicago, IL';
  public mapOptions = {
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
]};


  constructor(platform: Platform) {
    platform.ready().then(() => {
      Ng2MapComponent['apiUrl']= 'https://maps.google.com/maps/api/js?key=AIzaSyBavd4lIbm2bKkBHwvkMASXCQ3JHHl6FaM';
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

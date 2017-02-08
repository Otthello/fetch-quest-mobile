import { Injectable } from '@angular/core';
// import { Geolocation, Geoposition, BackgroundGeolocation } from 'ionic-native';
import { StorageService } from '../app/services/storage.service';
import { LocationTracker } from './location-tracker';
import 'rxjs/add/operator/filter';

@Injectable()
export class CheckMarkers {
  private coords: any;
  private markers: any;
  constructor(private storageService: StorageService){
    console.log("subscribing");
    var self = this;
    this.storageService.collection$.subscribe(latestCollection => {
      self.coords = latestCollection;
      console.log(latestCollection);
      console.log("******************************CHANGED!**************************************");
      self.markers = JSON.parse(localStorage["markers"]);
      console.log(self.markers);
      self.checkMarkers();
    });
  }

  checkMarkers(){
    // var currentPosition = new google.maps.LatLng(parseInt(this.coords[0]), parseInt(this.coords[1]));
    var currentPosition = {lat: parseFloat(this.coords[0]), lng: parseFloat(this.coords[1])}
    for(var i = 0; i < this.markers.length; i++){
      var lat = parseFloat(this.markers[i].coords[0]);
      var lng = parseFloat(this.markers[i].coords[1]);
      var markerPosition = {lat: lat, lng: lng};
      // console.log("latC: " + this.coords[0]);
      // console.log("lngC: " + this.coords[1]);
      // console.log("latM: " + lat);
      // console.log("lngM: "+ lng);
      // var markerPosition = new google.maps.LatLng(parseInt(lat), parseInt(lng));
      // console.log(currentPosition);
      // console.log(markerPosition);
      // console.log("currentPos: ");
      console.log(currentPosition);
      // console.log("markerPos: ");
      console.log(markerPosition);
      var distance = this.getDistance(currentPosition, markerPosition);
      // var distance = google.maps.geometry.spherical.computeDistanceBetween(currentPosition, markerPosition);
      console.log("distance: " + distance);
    }
  }

  rad(x) {
    return x * Math.PI / 180;
  };

  getDistance(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = this.rad(p2.lat - p1.lat);
    var dLong = this.rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
};

}

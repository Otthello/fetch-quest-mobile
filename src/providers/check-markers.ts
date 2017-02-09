import { Injectable } from '@angular/core';
// import { Geolocation, Geoposition, BackgroundGeolocation } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import { RequestService } from '../app/services/request.service';
import { StorageService } from '../app/services/storage.service';
import { LocationTracker } from './location-tracker';
import { LocalNotifications } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import 'rxjs/add/operator/filter';

@Injectable()
export class CheckMarkers {
  static readonly DISTANCE_THRESHOLD = 200; // in meters
  private coords: any;
  private markers: any;
  private alertActive: boolean;
  constructor(
    private requestService: RequestService,
    private storageService: StorageService,
    private alertCtrl: AlertController
  )
  {
    this.alertActive = false;
    LocalNotifications.on("click", (notification, state) => {
      let alert = this.alertCtrl.create({
        title: "Notification Clicked",
        subTitle: "You just clicked the scheduled notification",
        buttons: ["OK"]
      });
      alert.present();
    });
    console.log("subscribing");
    var self = this;
    this.storageService.collection$.subscribe(latestCollection => {
      console.log("ALERTACTIVE: " + this.alertActive);
      if(!this.alertActive){
        self.coords = latestCollection;
        console.log(latestCollection);
        console.log("******************************CHANGED!**************************************");
        console.log("localStorage!!!!!!!!!!!!!");
        console.log(localStorage);
        console.log(localStorage.getItem("markers"));
        if(localStorage.getItem("markers") != null){
          console.log("RUNNING CHECK MARKERS");
          self.markers = JSON.parse(localStorage["markers"]);
          console.log(self.markers);
          self.checkMarkers();
        }
      }
    });
  }
  completeErrand(marker){
    var self = this;
    console.log("BUILDING ALERT");
    console.log("marker");
    console.log(marker);
    let alert = this.alertCtrl.create({
      title: "You just completed:",
      subTitle: marker.hook,
      buttons: ["Claim thou reward"]
    });
    console.log("SHOWING ALERT");
    this.alertActive = true;
    alert.present();
    console.log("ALERT HAS BEEN SHOWN");
    alert.onDidDismiss(() => {
      this.alertActive = false;
      self.updateErrand(marker.errand_id);
    });
    this.scheduleNotification(marker);
  }

  updateErrand(errand_id){
    this.requestService.updateErrand(errand_id)
    .subscribe(data => {
        console.log("DONE UPDATING ERRAND");
        console.log(data);
      }, error => {
        console.log("error!");
        // console.log(error);
      });
  }

  scheduleNotification(marker){
    LocalNotifications.schedule({
      title: "Test Title",
      text: "Delayed Notification",
      at: new Date(new Date().getTime() + 5 * 1000),
      sound: null
    });
  }

  checkMarkers(){
    // var currentPosition = new google.maps.LatLng(parseInt(this.coords[0]), parseInt(this.coords[1]));
    var currentPosition = {lat: parseFloat(this.coords[0]), lng: parseFloat(this.coords[1])}
    for(var i = 0; i < this.markers.length; i++){
      var lat = parseFloat(this.markers[i].coords[0]);
      var lng = parseFloat(this.markers[i].coords[1]);
      var markerPosition = {lat: lat, lng: lng};
      var distance = this.getDistance(currentPosition, markerPosition);
      console.log("distance: " + distance);
      if(distance < CheckMarkers.DISTANCE_THRESHOLD){
        var marker = this.markers[i];
        this.markers.splice(i,1);
        localStorage.setItem("markers",JSON.stringify(this.markers));
        console.log("COMPLETING ERRAND");
        console.log("marker");
        console.log(marker);
        this.completeErrand(marker);
        return;
      }
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
    return d; // returns the distance in meters
  };
}

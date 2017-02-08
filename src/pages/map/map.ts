import { Component, NgModule } from '@angular/core';
import { NavController, PopoverController, ViewController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';
import { RequestService } from '../../app/services/request.service';
import { PopoverPage } from './popover'

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  positions: any;
  errands: any;
  public mapOptions = {
    zoom: 9,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
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


  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, private viewCtrl: ViewController, public locationTracker: LocationTracker, private requestService: RequestService) {

  }

  start(){
    this.positions = [];
    let myLat: number, myLng: number;
    this.locationTracker.startTracking();
    this.positions.push([this.locationTracker.lat, this.locationTracker.lng]);
  }

  stop(){
    this.locationTracker.stopTracking();
  }

  showInfoPane(myEvent){
    console.log(myEvent);
    let revealPopover = this.popoverCtrl.create(PopoverPage,myEvent);

    revealPopover.present();
  }


  randomIcon(){
    let randomAsset: number;
    var iconUrls = [
    "../../assets/castle.gif",
    "http://i.imgur.com/kCAUq0E.png",
    "http://i.imgur.com/QhEzDuK.png",
    "http://i.imgur.com/1tjHokx.png",
    "http://i.imgur.com/Vow5Cv0.png",
    "http://i.imgur.com/P0FPPZu.png",
    "http://i.imgur.com/ZqoiYZL.png"
    ]
    randomAsset = Math.floor(Math.random() * 7);
    return iconUrls[randomAsset];
  }

  ionViewWillEnter(){
      this.start();
      this.stop();
      this.start();
      this.viewCtrl.showBackButton(false);
      this.errands = [];
      var self = this;
      var res = this.requestService.getErrandLocations()
      .map(res => res.json())
      .subscribe(data => {
        for(var i = 0, j = data.data.length;i<j; i++){
          self.errands.push({
            coords: [data.data[i].lat, data.data[i].lng],
            thumbnail: data.data[i].npc_thumb,
            hook: data.data[i].hook,
            icon: self.randomIcon()
          });
        }
    });
  }

}

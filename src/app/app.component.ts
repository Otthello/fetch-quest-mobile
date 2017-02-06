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

  showLocation(){

  }

  getUserLocation(){
    let lat: number, lng: number
    navigator.geolocation
  }



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

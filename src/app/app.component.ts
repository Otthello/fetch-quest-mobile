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



  constructor(platform: Platform) {
    platform.ready().then(() => {
      Ng2MapComponent['apiUrl']= 'https://maps.google.com/maps/api/js?key=AIzaSyBavd4lIbm2bKkBHwvkMASXCQ3JHHl6FaM&style=element:labels%7Cvisibility:off&style=element:labels.icon%7Cvisibility:off&style=feature:administrative%7Celement:geometry.fill%7Cvisibility:off&style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0x000000%7Cvisibility:on&style=feature:landscape%7Celement:geometry.fill%7Ccolor:0x30ff00%7Cvisibility:on&style=feature:landscape%7Celement:geometry.stroke%7Ccolor:0x30ff00%7Cvisibility:on&style=feature:poi%7Celement:geometry.fill%7Cvisibility:off&style=feature:poi%7Celement:geometry.stroke%7Cvisibility:off&style=feature:road%7Ccolor:0xe1ff8d%7Cvisibility:on&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:transit%7Celement:geometry.fill%7Ccolor:0xe1ff8d&style=feature:transit%7Celement:geometry.stroke%7Ccolor:0x602400%7Cvisibility:on%7Cweight:1.5&style=feature:water%7Celement:geometry.fill%7Ccolor:0x0e38e4%7Cvisibility:on&style=feature:water%7Celement:geometry.stroke%7Ccolor:0x0e38e4%7Cvisibility:on';
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

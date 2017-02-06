import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition, BackgroundGeolocation } from 'ionic-native';
import 'rxjs/add/operator/filter';

@Injectable()
export class LocationTracker {

  public watch:any;
  public lat: number = 0;
  public lng: number = 0;

  constructor(public zone: NgZone) {
    console.log('Hello LocationTracker Provider');
  }

  startTracking(){
    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 2000
    };

    BackgroundGeolocation.configure((location) => {
      console.log('BackgroundGeolocation:   ' + location.latitude + "," + location.longitude);

      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
      });

    }, (err) => {

      console.log(err);
    }, config);

    //turning ON the background-geolocation
    BackgroundGeolocation.start();

    //Foreground

    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = Geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
      console.log(position);

      this.zone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });


    });

  }

  stopTracking(){

    console.log('stopTracking');

    BackgroundGeolocation.finish();
    this.watch.unsubscribe();
  }

}

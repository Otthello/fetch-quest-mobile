import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition, BackgroundGeolocation } from 'ionic-native';
import { StorageService } from '../app/services/storage.service';
import { CheckMarkers } from './check-markers';
import 'rxjs/add/operator/filter';

@Injectable()
export class LocationTracker {
  private myArray: any;
  // public checkCount: number = 0;
  public watch:any;
  public lat: number = 0;
  public lng: number = 0;
  // public observable: any;
  // protected storageService: StorageService;
  constructor(public zone: NgZone, private storageService: StorageService, private checkMarker: CheckMarkers) { //,
    this.storageService.collection$.subscribe(latestCollection => {
      this.myArray = latestCollection;
    });
    this.storageService.load();

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
        // console.log("CHECKING YOUR LOCATION");

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
        console.log("CHECKING YOUR LOCATION");
        // this.checkCount++;
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        // data = position.coords.latitude, position.coords.longitude};
        // this.storageService.load();
        this.storageService.replace([this.lat, this.lng]);
      });


    });

  }

  stopTracking(){

    console.log('stopTracking');

    BackgroundGeolocation.finish();
    this.watch.unsubscribe();
  }

}

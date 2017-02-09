"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ionic_native_1 = require("ionic-native");
require("rxjs/add/operator/filter");
var LocationTracker = (function () {
    function LocationTracker(zone) {
        this.zone = zone;
        this.lat = 0;
        this.lng = 0;
        console.log('Hello LocationTracker Provider');
    }
    LocationTracker.prototype.startTracking = function () {
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 2000
        };
        ionic_native_1.BackgroundGeolocation.configure(function (location) {
            console.log('BackgroundGeolocation:   ' + location.latitude + "," + location.longitude);
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
        }, function (err) {
            console.log(err);
        }, config);
        ionic_native_1.BackgroundGeolocation.start();
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = ionic_native_1.Geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            _this.zone.run(function () {
                console.log("CHECKING YOUR LOCATION");
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        });
    };
    LocationTracker.prototype.stopTracking = function () {
        console.log('stopTracking');
        ionic_native_1.BackgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    return LocationTracker;
}());
LocationTracker = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], LocationTracker);
exports.LocationTracker = LocationTracker;

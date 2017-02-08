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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.getLocationInfo = function (place_id) {
        return this.http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + place_id + "&key=AIzaSyBavd4lIbm2bKkBHwvkMASXCQ3JHHl6FaM");
    };
    RequestService.prototype.loginUser = function (credentials) {
        var url = "http://flashy-pancake.herokuapp.com/api/v1/login";
        url = url + "?" + this.serialize(credentials) + "&key=d67cd72d34986c1d7d8a42cfb7513f07";
        return this.http.post(url);
    };
    RequestService.prototype.registerUser = function (userInfo) {
        var url = "http://flashy-pancake.herokuapp.com/api/v1/users";
        url = url + "?" + this.serialize(userInfo);
        return this.http.post(url);
    };
    RequestService.prototype.postLocation = function (coordinates) {
        var url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
        var postRequest = url + "?" + this.serialize(coordinates);
        this.http.post(postRequest)
            .subscribe(function (data) {
            console.log("success");
            console.log("data");
            console.log(data);
        }, function (error) {
            console.log("error!");
        });
    };
    RequestService.prototype.getErrands = function () {
        var url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
        var options = {
            key: "d67cd72d34986c1d7d8a42cfb7513f07",
            token: localStorage["token"],
            username: "VargouilleSupreme",
            email: "test@test.com"
        };
        var headers = new http_1.Headers();
        headers.append("Access-Control-Allow-Headers", "X-Requested-With");
        url = url + "?" + this.serialize(options);
        return this.http.get(url);
    };
    RequestService.prototype.postErrands = function (data) {
        var url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
        url = url + "?" + this.serialize(data);
        return this.http.post(url);
    };
    RequestService.prototype.getErrandLocations = function () {
        var url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
        var options = {
            key: "d67cd72d34986c1d7d8a42cfb7513f07",
            token: localStorage["token"],
            options: "location"
        };
        var headers = new http_1.Headers();
        headers.append("Access-Control-Allow-Headers", "X-Requested-With");
        url += "?" + this.serialize(options);
        console.log("getting errands from...");
        return this.http.get(url);
    };
    RequestService.prototype.serialize = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return RequestService;
}());
RequestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RequestService);
exports.RequestService = RequestService;

import { Injectable } from '@angular/core';

import { Headers, RequestOptions, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RequestService{
  http: any;

  constructor(http: Http){
    this.http = http;
  }

  getLocationInfo(place_id){
    return this.http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid="+place_id+"&key=AIzaSyBavd4lIbm2bKkBHwvkMASXCQ3JHHl6FaM");
  }

  loginUser(credentials){
    var url = "http://flashy-pancake.herokuapp.com/api/v1/login";
    url = url + "?" + this.serialize(credentials);
    return this.http.post(url);
  }

  registerUser(userInfo){
    var url = "http://flashy-pancake.herokuapp.com/api/v1/users";
    url = url + "?" + this.serialize(userInfo);
    return this.http.post(url)
  }

  postLocation(coordinates) {
    var url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
    var postRequest = url + "?" + this.serialize(coordinates);
    this.http.post(postRequest)
    .subscribe(data => {
        console.log("success");
        console.log("data");
        console.log(data);
      }, error => {
        console.log("error!");
        // console.log(error);
      });
  }

  getErrands(){
    let url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
    let options = {
      key: "d67cd72d34986c1d7d8a42cfb7513f07",
      token: localStorage["token"],
      username: "VargouilleSupreme",
      email: "test@test.com"
    };
    var headers = new Headers();
    headers.append("Access-Control-Allow-Headers","X-Requested-With");
    url = url + "?" + this.serialize(options);
    return this.http.get(url);
  }

  postErrands(data) {
    let url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
    url = url + "?" + this.serialize(data);
    return this.http.post(url);

  }

  getErrandLocations(){
    let url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
    let options = {
      key: "d67cd72d34986c1d7d8a42cfb7513f07",
      token: "y9sRWTJZMxrdGQV4qFAAAD9d",
      options: "location"
    };

    var headers = new Headers();
    headers.append("Access-Control-Allow-Headers","X-Requested-With");

    url += "?" + this.serialize(options);
    console.log("getting errands from...");
    return this.http.get(url);
  }

  getEquips(){
    let url = "http://flashy-pancake.herokuapp.com/api/v1/equips";
    let options = {
      key: "d67cd72d34986c1d7d8a42cfb7513f07",
      token: localStorage["token"],
  };
    var headers = new Headers();
    headers.append("Access-Control-Allow-Headers","X-Requested-With");
    url = url + "?" + this.serialize(options);
    return this.http.get(url);
}

  serialize(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
}

}

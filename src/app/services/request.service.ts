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
    var googleKey = "AIzaSyBavd4lIbm2bKkBHwvkMASXCQ3JHHl6FaM";
    var url = "https://maps.googleapis.com/maps/api/place/details/json?placeid="+place_id;
    url = url + "&key=" + googleKey;
    return this.http.get(url);
  }

  loginUser(credentials){
    var url = "http://flashy-pancake.herokuapp.com/api/v1/login";
    url = url + "?" + this.serialize(credentials) + "&key=18b944cbb4219f54147918d2d74d0ded";
    return this.http.post(url);
  }

  registerUser(userInfo){
    userInfo["key"] = "18b944cbb4219f54147918d2d74d0ded";
    var url = "http://flashy-pancake.herokuapp.com/api/v1/users";
    url = url + "?" + this.serialize(userInfo);
    return this.http.post(url)
  }

  postLocation(coordinates) {
    coordinates["key"] = "18b944cbb4219f54147918d2d74d0ded";
    coordinates["token"] = localStorage["token"];
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
      key: "18b944cbb4219f54147918d2d74d0ded",
      token: localStorage["token"],
      username: "VargouilleSupreme",
      email: "test@test.com"
    };
    var headers = new Headers();
    headers.append("Access-Control-Allow-Headers","X-Requested-With");
    url = url + "?" + this.serialize(options);
    console.log("GETTING ERRANDS AT: ");
    console.log(url);
    return this.http.get(url);
  }

  postErrands(data) {
    data["key"] = "18b944cbb4219f54147918d2d74d0ded";
    data["token"] = localStorage["token"];
    let url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
    url = url + "?" + this.serialize(data);
    return this.http.post(url);

  }

  getErrandLocations(){
    let url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
    let options = {
      key: "18b944cbb4219f54147918d2d74d0ded",
      token: localStorage["token"],
      options: "location"
    };

    var headers = new Headers();
    headers.append("Access-Control-Allow-Headers","X-Requested-With");

    url += "?" + this.serialize(options);
    console.log("getting errands from...");
    console.log(url);
    return this.http.get(url);
  }

  postEquips(){
    let url = "http://flashy-pancake.herokuapp.com/api/v1/equips"
    let data = {
      key: "18b944cbb4219f54147918d2d74d0ded",
      token: localStorage["token"]
    }
    url = url + "?" + this.serialize(data);
    return this.http.post(url);
  }

  updateErrand(errand_id){
    var data = {
      key: "18b944cbb4219f54147918d2d74d0ded",
      token: localStorage["token"]
    }
    let url = "http://flashy-pancake.herokuapp.com/api/v1/errands/" + errand_id + "?" + this.serialize(data);
    console.log("UPDATING AT: ");
    console.log(url);
    return this.http.put(url);
  }

  getEquips(){
    let url = "http://flashy-pancake.herokuapp.com/api/v1/equips";
    let options = {
      key: "18b944cbb4219f54147918d2d74d0ded",
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

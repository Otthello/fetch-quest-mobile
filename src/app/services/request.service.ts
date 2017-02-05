import { Injectable } from '@angular/core';

import { Headers, RequestOptions, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RequestService{
  http: any;

  constructor(http: Http){
    this.http = http;
  }

  getLocation(){
    return this.http.get("http://flashy-pancake.herokuapp.com/api/v1/test/errands")
      .map(res => res.json());
  }

  postLocation(coordinates) {
    var url = "http://flashy-pancake.herokuapp.com/api/v1/test/errands";
    var postRequest = url + "?" + this.serialize(coordinates);
    this.http.post(postRequest)
    .subscribe(data => {
        console.log("success");
        console.log("data");
          console.log(data);
      }, error => {
        console.log("error!");
        console.log(JSON.parse(error.json()));
      });
  }

  serialize(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
}

}

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

  loginUser(credentials){
    var url = "http://flashy-pancake.herokuapp.com/api/v1/login";
    url = url + "?" + this.serialize(credentials);
    this.http.post(url)
    .subscribe(data => {
        console.log("success");
          console.log(data);
          var responseToken = JSON.parse(data["_body"]);
          localStorage.setItem("token", responseToken.token)
      }, error => {
        console.log("error!");
        console.log(JSON.parse(error.json()));
      });
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

  getErrands(){
    let url = "http://flashy-pancake.herokuapp.com/api/v1/errands";
    let urlone = url;
    let options = {
      key: "YtTA7DMLT1WznKCL5pF7eEDk",
      username: "VargouilleSupreme",
      email: "test@test.com"
    };
    var headers = new Headers();
    headers.append("Access-Control-Allow-Headers","X-Requested-With");
    // headers.append('Authorization', `Bearer ${"424864f710be68095339e465c0c5beb2"}`);
    // let options2 = new RequestOptions({headers: headers});
    // console.log(options2);
    url = url + "?" + this.serialize(options);
    console.log("getting errands from...");
    console.log(urlone);
    // console.log("google");
    return this.http.get(url);


    // return this.http.get(url)
    // return this.http.get("http://flashy-pancake.herokuapp.com/api/v1/errands")

  }

  serialize(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    return result.join("&");
}

}

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
    console.log("HII!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    // console.log(this.http);
    return this.http.get("http://flashy-pancake.herokuapp.com/api/v1/test/errands")
      .map(res => res.json());
  }

  postLocation(coordinates) {
    console.log(this.serialize(coordinates));
    // console.log("attempting to post");
    // console.log(coordinates);
    // var headers = new Headers();
    // // headers.append("Method", 'POST');
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json' );
    // let options = new RequestOptions({ method: 'POST', headers: headers });
    //
    // let postParams = coordinates;
    // console.log("options");
    // console.log(options);
    // // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // // let options = new RequestOptions({ headers: headers });
    // // var sendMessage = this.http.$httpParamSerializer(coordinates);
    // // console.log(sendMessage);
    // // this.http.post(["http://flashy-pancake.herokuapp.com/api/v1/test/errands","?latitude=",coordinates.coords.latitude,"&longitude=", coordinates.coords.longitude].join(''))
    // this.http.post("http://flashy-pancake.herokuapp.com/api/v1/test/errands", postParams, options)
    // .subscribe(data => {
    //     console.log("success");
    //     console.log("data");
    //       console.log(data);
    //   }, error => {
    //     console.log("error!");
    //     console.log(JSON.parse(error.json()));
    //   });
    //   // .subscribe(data => {
    //   //     console.log("data");
    //   //     console.log(data);
    //   // }, error => {
    //   //     console.log("error!");
    //   //     console.log(JSON.parse(error.json()));
    //   // });
//     $http({
//     method: 'POST',
//     url: "http://flashy-pancake.herokuapp.com/api/v1/test/errands",
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//     transformRequest: function(obj) {
//         var str = [];
//         for(var p in obj)
//         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//         return str.join("&");
//     },
//     data: coordinates
// }).success(function () {});
  }
  serialize(obj){
    var str = [];
    for(var p in obj)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
  }
}

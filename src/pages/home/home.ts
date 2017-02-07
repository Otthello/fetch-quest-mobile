import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestService } from '../../app/services/request.service';
import { AlertController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { RegisterPage } from '../register/register'
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;
  password: string;
  tabBarElement: any;
  showErrors: boolean;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private requestService: RequestService) {
    this.email = "";
    this.password = "";
    this.showErrors = false;
    this.tabBarElement = document.querySelector('.tabbar');
    console.log("tabBarElement");
    console.log(this.tabBarElement);
  }
  ionViewWillEnter(){
    console.log(this.tabBarElement.style.display);
    console.log("settings as none");
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    console.log("settings as block");
    this.tabBarElement.style.display = '';
  }
  registerPage(){
    console.log("hi!");
    this.navCtrl.push(RegisterPage);
  }

  login(){
    var self = this;
    var credentials = {
      email: this.email,
      password: this.password
    }
    var loginStatus = this.requestService.loginUser(credentials);
    loginStatus.subscribe(data => {
        // console.log("success");
        // console.log(data);
        var responseToken = JSON.parse(data["_body"]);
        localStorage.setItem("token", responseToken.token);
        this.navCtrl.push(MapPage);
      }, error => {
        // console.log("error!");
        // console.log(error);
        self.showErrors = true;
      });
    console.log("loginStatus");
    console.log(loginStatus);
  }

  // getLocation(){
  //   this.requestService.getLocation().subscribe(response => {
  //       let alert = this.alertCtrl.create();
  //       console.log(response);
  //       console.log(response.data.task);
  //       alert.setTitle(response.data.task);
  //
  //       alert.addButton('Cancel');
  //       alert.present();
  //   });
  // }
  //
  // postLocation(){
  //   var self = this;
  //   Geolocation.getCurrentPosition()
  //     .then(function(position){
  //       var jsonPosition = {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude
  //       };
  //       // jsonPosition = $httpParamSerializer(jsonPosition);
  //
  //       console.log(jsonPosition);
  //       self.requestService.postLocation(jsonPosition);
  //     });
  // }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RequestService } from '../../app/services/request.service';
import { AlertController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { RegisterPage } from '../register/register'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private requestService: RequestService) {
    this.email = "";
    this.password = "";
  }

  registerPage(){
    console.log("hi!");
    this.navCtrl.push(RegisterPage);
  }

  login(){
    var credentials = {
    email: this.email,
    password: this.password
    }
    this.requestService.loginUser(credentials);
    console.log(credentials);
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

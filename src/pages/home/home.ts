import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { RequestService } from '../../app/services/request.service';
import { AlertController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { RegisterPage } from '../register/register'
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;
  password: string;
  tabBarElement: any;
  showErrors: boolean;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private requestService: RequestService, private viewCtrl: ViewController ) {
    this.email = "";
    this.password = "";
    this.showErrors = false;
    this.tabBarElement = document.querySelector('.tabbar');
    console.log("tabBarElement");
    console.log(this.tabBarElement);
  }
  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
    this.viewCtrl.showBackButton(false);
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
        this.navCtrl.push(TabsPage);
      }, error => {
        // console.log("error!");
        // console.log(error);
        self.showErrors = true;
      });
    console.log("loginStatus");
    console.log(loginStatus);
  }

}

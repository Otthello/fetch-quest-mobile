import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html'
})
export class AvatarPage {

  constructor(public navCtrl: NavController) {
    console.log("hi from avatar page");
  }
  logoutUser(){
    localStorage.removeItem("token");
    this.navCtrl.push(HomePage);
  }
}

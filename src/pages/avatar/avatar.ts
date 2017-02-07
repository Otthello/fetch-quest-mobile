import { Component } from '@angular/core';
import { RequestService } from '../../app/services/request.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html'
})
export class AvatarPage {
    equips: string[];

  constructor(public navCtrl: NavController, private requestService: RequestService) {
    console.log("hi from avatar page");
    this.equips = []
  }

  getEquips(){
    var res = this.requestService.getEquips()
    .map(res => res.json())
    .subscribe(data => {
      this.equips = data.data
      console.log(this.equips)
    })
  }

  logoutUser(){
    localStorage.removeItem("token");
    // this.navCtrl.push(avatarPage);
  }
}

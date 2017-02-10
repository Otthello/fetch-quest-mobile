import { Component } from '@angular/core';
import { RequestService } from '../../app/services/request.service';

import { HomePage } from '../home/home';
import { NavController, ModalController, Alert } from 'ionic-angular';

@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html'

})
export class AvatarPage {
    equips: any;
    slot: any;
    currentEquips: any;
    availableEquips: any;
    startingIndex: number;

  constructor(public navCtrl: NavController, private requestService: RequestService) {
      console.log("hi from avatar page");
      this.equips = [];
      this.availableEquips = [];
      this.startingIndex = 0;
      this.currentEquips = [];

  }

  setItem(equip){
    console.log("EQUIPPING!");
    console.log(equip)
    this.currentEquips[equip.slot - 1] = equip;
    localStorage.setItem("currentEquips", JSON.stringify(this.currentEquips));
  }

  moveUp(){
    if(this.startingIndex < this.equips.length - 3){
      this.startingIndex++;
      var newArray = [];
      var i = this.startingIndex;
      while(i < this.startingIndex + 3 && this.equips[i] != null){
        newArray.push(this.equips[i]);
        i++;
      }
      this.availableEquips = newArray;
      console.log(this.equips.length);
      console.log(this.startingIndex);
      console.log(this.availableEquips);
    }
  }
  moveDown(){
    if(this.startingIndex > 0){
      this.startingIndex--;
      var newArray = [];
      var i = this.startingIndex;
      while(i < this.startingIndex + 3 && this.equips[i] != null){
        newArray.push(this.equips[i]);
        i++;
      }
      this.availableEquips = newArray;
      console.log(this.equips.length);
      console.log(this.startingIndex);
      console.log(this.availableEquips);
    }
  }
  getEquips(){
    var res = this.requestService.getEquips()
    .map(res => res.json())
    .subscribe(data => {
      this.equips = data.data;
      console.log(this.equips);
      console.log("EQUIPS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      var i = 0;
      while(i < 3 && this.equips[i] != null){
        this.availableEquips.push(this.equips[i]);
        i++;
      }
      // if(localStorage["currentEquips"] == null && this.equips.length > 0){
      //   console.log(this.equips[0]);
      //   console.log(JSON.stringify(this.equips[0]));
      //   localStorage.setItem("currentEquips", JSON.stringify(this.equips[0]));
      // }
      if(localStorage["currentEquips"] != null && this.equips.length > 0){
        this.currentEquips = JSON.parse(localStorage["currentEquips"]);
      }
      console.log("RECEIVED EQUIPS");
    })
  }
  ionViewWillEnter(){
    console.log("ENTERING");
    this.getEquips()
  }


  logoutUser(){
    localStorage.clear();
    this.navCtrl.push(HomePage);
  }
}

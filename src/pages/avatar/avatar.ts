import { Component } from '@angular/core';
import { RequestService } from '../../app/services/request.service';
import { HomePage } from '../home/home';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html'
})
export class AvatarPage {
    equips: any;
    currentEquip: any;
    availableEquips: any;
    startingIndex: number;

  constructor(public navCtrl: NavController, private requestService: RequestService) {
    console.log("hi from avatar page");
    this.startingIndex = 0;
    this.equips = [];
    this.availableEquips = [];
  }
  setItem(equip){
    this.currentEquip = equip;
    localStorage.setItem("currentEquip", JSON.stringify(equip));
  }

  moveUp(){
    if(this.startingIndex < this.equips.length - 4){
      this.startingIndex++;
      var newArray = [];
      var i = this.startingIndex;
      while(i < this.startingIndex + 4 && this.equips[i] != null){
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
      while(i < this.startingIndex + 4 && this.equips[i] != null){
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
      while(i < 4 && this.equips[i] != null){
        this.availableEquips.push(this.equips[i]);
        i++;
      }
      if(localStorage["currentEquip"] == null && this.equips.length > 0){
        console.log(this.equips[0]);
        console.log(JSON.stringify(this.equips[0]));
        localStorage.setItem("currentEquip", JSON.stringify(this.equips[0]));
      }
      if(this.equips.length > 0){
        this.currentEquip = JSON.parse(localStorage["currentEquip"]);
      }
    })
  }
  ionViewWillEnter(){
    this.getEquips()
  }


  logoutUser(){
    localStorage.removeItem("token");
    localStorage.removeItem("markers");
    this.navCtrl.push(HomePage);
  }
}

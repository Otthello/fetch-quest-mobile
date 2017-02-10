import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { RequestService } from '../../app/services/request.service';

@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html'
})
export class RewardPage {
  image_url: string;

  constructor(private requestService: RequestService, private viewCtrl: ViewController){
    console.log("SHOWING REWARD!!!!!!!!!!!!!!!!!!!!!!");
    this.requestService.postEquips()
    .subscribe(data => {
      var jsonData = JSON.parse(data["_body"]);
      console.log("RECEIVED AN EQUIP");
      console.log(jsonData);
      this.image_url = jsonData.data.image_url;
      console.log(this.image_url);
    }, error => {
      console.log("error!");
    });
  }

  dismissPage(){
    this.viewCtrl.dismiss();
  }
}

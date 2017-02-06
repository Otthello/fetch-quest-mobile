import { Component } from '@angular/core';
import { RequestService } from '../../app/services/request.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-quest',
  templateUrl: 'quest.html'
})
export class QuestPage {

  constructor(public navCtrl: NavController, private requestService: RequestService) {
  }

  ionViewWillEnter(){
    var res = this.requestService.getErrands();
    console.log(res);
  }

}

import { Component } from '@angular/core';
import { RequestService } from '../../app/services/request.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-quest',
  templateUrl: 'quest.html'
})
export class QuestPage {
  errands: any;
  constructor(public navCtrl: NavController, private requestService: RequestService) {
  }

  ionViewWillEnter(){
    var self = this;
    var res = this.requestService.getErrands()
    .map(res => res.json())
    .subscribe(data => {
      self.errands = data.data;
      console.log(self.errands);
    });
  }

}

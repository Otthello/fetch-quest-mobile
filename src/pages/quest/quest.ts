import { Component } from '@angular/core';
import { RequestService } from '../../app/services/request.service';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { QuestFormPage } from '../quest_form/quest_form'

@Component({
  selector: 'page-quest',
  templateUrl: 'quest.html'
})
export class QuestPage {
  errands: any;
  // showQuestForm: boolean;
  constructor(public navCtrl: NavController, private requestService: RequestService, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    // this.showQuestForm = false;
  }
  getErrands(){
    var self = this;
    var res = this.requestService.getErrands()
    .map(res => res.json())
    .subscribe(data => {
      self.errands = data.data;
      // self.errands.push({showInfo: false});
      // self.errands.splice(self.errands.length - 1, 1);
      console.log(self.errands);
    });
  }
  ionViewWillEnter(){
    this.getErrands();
  }
  getErrandInfo(errand){
    console.log(errand);
    let alert = this.alertCtrl.create({
      title: "Original task",
      message: errand.task,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  // toggleQuestForm(){
  //   this.showQuestForm = !this.showQuestForm;
  // }

  showQuestForm(){
    let modal = this.modalCtrl.create(QuestFormPage);
    modal.present();
    modal.onDidDismiss(modalData => {
      if(modalData == null){ return }
      this.requestService.getLocationInfo(modalData.place_id)
      .map(res => res.json())
      .subscribe(locationData => {
        var location = locationData.result.geometry.location;
        var postData = {
          task: modalData.task,
          latitude: location.lat,
          longitude: location.lng,
          token: localStorage["token"]
        }
        console.log(postData);
        this.requestService.postErrands(postData)
        .subscribe(data => {
            this.getErrands();
          }, error => {
            console.log("error!");
            // console.log(error);
          });
      });
    });
  }

}

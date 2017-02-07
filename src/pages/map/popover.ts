import { NavController, ViewController, NavParams } from 'ionic-angular';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "popover-page",
  templateUrl: "popover.html",


})

export class PopoverPage {
  info: any;

  constructor(private nav: NavController, private params: NavParams, private viewCtrl: ViewController){
    console.log(params);
    this.info = this.params.data;
  }

  close(){
    this.viewCtrl.dismiss();
  }



}

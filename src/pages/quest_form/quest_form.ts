import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { QuestPage } from '../quest/quest';


@Component({
  selector: 'page-quest_form',
  templateUrl: 'quest_form.html'
})
export class QuestFormPage {
  task: string;
  address;
  autocompleteItems;
  autocomplete;
  autocompleteSelection;
  showList: boolean;
  // details_service = new
  service = new google.maps.places.AutocompleteService();


  constructor (public viewCtrl: ViewController, private zone: NgZone) {
    this.address = {
      place: ''
    };
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }
  dismissPage(){
    var data = {
      task: this.task,
      place_id: this.autocompleteSelection.place_id
    }
    if(data.place_id != null){
      this.viewCtrl.dismiss(data);
    }
  }
  chooseItem(item: any) {
    // this.viewCtrl.dismiss(item);
    // var autocomplete = new google.maps.places.Autocomplete(item.description);
    // console.log(autocomplete);
    // console.log(item.getPlace().geometry.location);
    this.autocomplete.query = item.description;
    this.autocompleteSelection = item;
    this.autocompleteItems = [];
  }
  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: {country: 'USA'} }, function (predictions, status) {
      me.autocompleteItems = [];
      console.log(predictions);
      if(predictions != null){
        me.zone.run(function () {
          predictions.forEach(function (prediction) {
            me.autocompleteItems.push(prediction);
          });
        });
      }
    });
  }

}

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
  clicked: boolean;
  showList: boolean;
  // details_service = new
  service = new google.maps.places.AutocompleteService();


  constructor (public viewCtrl: ViewController, private zone: NgZone) {
    var modalElement = document.querySelector('.modal-wrapper');
    // modalElement.classList.remove("modal-wrapper");
    this.clicked = false;
    this.autocompleteSelection = 0;
    this.address = {
      place: ''
    };
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  cancelPage(){
    this.viewCtrl.dismiss();
  }
  dismissPage(){
    this.clicked = true;
    var data = {
      task: this.task,
      place_id: this.autocompleteSelection.place_id
    }
    console.log("DISMISSING PAGE");
    console.log(data);
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

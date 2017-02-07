import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage} from '../tabs/tabs';
import { RequestService } from '../../app/services/request.service';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  username: string;
  email: string;
  avatar: string;
  password: string;
  passwordConfirm: string;
  incorrectPassword: boolean;

  constructor(public navCtrl: NavController, private requestService: RequestService) { // what are all these options
    this.username = "";
    this.email = "";
    this.avatar = "";
    this.password = "";
    this.incorrectPassword = false;
  }
  registerSubmit(){
  console.log(this.password)
  console.log(this.passwordConfirm)
    var self = this
    if(this.password === this.passwordConfirm){
      var newUser = {
      username: this.username,
      email: this.email,
      password: this.password,
      avatar_url: this.avatar
      }
      var registerStatus = this.requestService.registerUser(newUser);
       registerStatus.subscribe(data => {
        // console.log("success");
        console.log(data);
        var responseToken = JSON.parse(data["_body"]);
        console.log(responseToken)
        localStorage.setItem("token", responseToken.token);
        // this.navCtrl.push(TabsPage);
      }, error => {
        // console.log("error!");
        // console.log(error);
        this.incorrectPassword = true;
      });
    }
    else{
      this.incorrectPassword = true;
    }
  }

}

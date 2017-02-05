import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController) { // what are all these options
    this.username = "";
    this.email = "";
    this.avatar = "";
    this.password = "";
    this.incorrectPassword = false;
  }
  registerSubmit(){
    if(this.password === this.passwordConfirm){
      console.log(this.username)
      console.log(this.email)
      console.log(this.avatar)
      console.log(this.password)
      this.navCtrl.push(HomePage)
    }
    else{
      this.incorrectPassword = true;
    }
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MainPage} from '../main/main';
import {LoginPage} from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  skipMsg: string = "Je me connecte";

  constructor(public navCtrl: NavController) {

  }

  skip(){
    this.navCtrl.push(LoginPage);
  }

}

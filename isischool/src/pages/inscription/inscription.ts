import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {
  @ViewChild('firstname') firstname;
  @ViewChild('lastname')  lastname;
  @ViewChild('level') level;
  @ViewChild('bachelor')  bachelor;
  @ViewChild('master') master;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  inscriptionEtu() {
    console.log(this.firstname.value);
    console.log(this.lastname.value);
    console.log(this.level.value);
    console.log(this.bachelor.value);
    console.log(this.master.value)
    this.navCtrl.push(MenuPage, {firstName: this.firstname.value,lastName: this.lastname.value});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptionPage');
  }

}

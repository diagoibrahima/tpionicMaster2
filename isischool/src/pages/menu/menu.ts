import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Content  } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  public firstName ="";
  public lastname="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.firstName = this.navParams.get("firstName");
    this.lastname= this.navParams.get("lastName");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

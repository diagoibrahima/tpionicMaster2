import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InscriptionPage } from '../inscription/inscription';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 //private storage:Storage(SqlStorage);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   /* this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('create table users(id INTEGER PRIMARY KEY AUTOINCREMENT,first_name VARCHAR(30),last_name VARCHAR(30),email VARCHAR(20),password VARCHAR(30),)', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
    
    
      })
      .catch(e => console.log(e));*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  connexion(){
    this.navCtrl.push(MenuPage);
  }
  inscription(){
    this.navCtrl.push(InscriptionPage);
  }


}

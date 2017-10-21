import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { TabsPage } from '../../pages/tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string;
  public password: String;

  rootPage: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public http: Http,
    public LoginService: LoginServiceProvider, public navController: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let postParams = {
      email: this.email,
      password: this.password
    }
    this.LoginService.login(postParams)
      .then((user) => {
        let respuesta = JSON.parse(user["_body"]);
        if (user["status"] === 200) {
          alert(respuesta.message);
          this.navController.setRoot(TabsPage, {
            token: respuesta.token
          });
        } else {
          alert(respuesta.message);
        }
      }).catch((err) => {
        alert("error" + err);
      })
  }

}

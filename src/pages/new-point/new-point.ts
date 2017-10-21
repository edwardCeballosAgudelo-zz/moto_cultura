import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PuntoServiceProvider } from "../../providers/punto-service/punto-service";
import { AboutPage } from "../about/about";

@IonicPage()
@Component({
  selector: 'page-new-point',
  templateUrl: 'new-point.html',
})
export class NewPointPage {
  descripcion: any;
  longitud: any;
  latitud: any;
  distancia: any;
  name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public puntoServices:PuntoServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPointPage');
  }

  savePuntoAccidente() {
    const postParams = {
      nombre: this.name,
      descripcion: this.descripcion,
      longitud: this.longitud,
      latitud: this.latitud,
      distancia: this.distancia
    };

    console.log(postParams)

    this.puntoServices.newPuntoAccidente(postParams).then((typeNorma) => {
      alert(typeNorma['statusText']);
      this.navCtrl.setRoot(AboutPage)
    }).catch((err) => {
      console.log(err);
    });
  }


}

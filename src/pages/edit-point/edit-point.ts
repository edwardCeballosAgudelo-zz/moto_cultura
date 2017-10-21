import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PuntoServiceProvider } from "../../providers/punto-service/punto-service";
import { AboutPage } from "../about/about";

@IonicPage()
@Component({
  selector: 'page-edit-point',
  templateUrl: 'edit-point.html',
})
export class EditPointPage {
  id: any;

  data: any;
  descripcion: any;
  longitud: any;
  latitud: any;
  distancia: any;
  name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public puntoServices:PuntoServiceProvider) {
    this.data = navParams.get('data');
    this.id = this.data._id;
  }

  ionViewDidLoad() {
    this.name = this.data.nombre;
    this.descripcion = this.data.descripcion;
    this.longitud = this.data.longitud;
    this.latitud = this.data.latitud;
    this.distancia = this.data.distancia;
  }

  updatePuntoAccidente() {
    const postParams = {
      id:  this.id ,
      name: this.name,
      descripcion: this.descripcion,
      longitud:this.longitud,
      latitud: this.latitud,
      distancia:this.distancia
    };
    this.puntoServices.updatePuntoAccidente(postParams).then((typeNorma) => {
      alert(typeNorma['statusText']);
      this.navCtrl.setRoot(AboutPage)
    }).catch((err) => {
      console.log(err);
    });
  }
}

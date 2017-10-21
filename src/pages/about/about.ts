import { Component, OnInit } from '@angular/core';
import {Refresher, NavController} from 'ionic-angular';
import { PuntoServiceProvider } from "../../providers/punto-service/punto-service";
import { NgForm } from '@angular/forms';
import { NewPointPage } from "../new-point/new-point";
import { EditPointPage } from "../edit-point/edit-point";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

  puntosAccidentes: any;

  constructor(public navCtrl: NavController, public puntoServices: PuntoServiceProvider) {}

  ngOnInit(): void {
    this.getPuntosAccidentes();
  }

  getPuntosAccidentes() {
    this.puntoServices.getPuntosAccidentes().then((punto) => {
      const respuesta = JSON.parse(punto['_body']);
      this.puntosAccidentes = respuesta.accidentPoints;
    }).catch((err) => {
      console.log(err);
    });
  }

  deletePuntoAccidente(id) {
    this.puntoServices.deletePuntoAccidente(id).then((typeNorma) => {
      const respuesta = JSON.parse(typeNorma['_body']);
      this.getPuntosAccidentes();
    }).catch((err) => {
      console.log(err);
    });
  }

  newPoint(){
    this.navCtrl.push(NewPointPage);
  }

  editPuntoAccidente(item){
    this.navCtrl.push(EditPointPage, {
      data: item
    });
  }

  recargar_puntos(refresher: Refresher) {
    setTimeout(() => {
      this.getPuntosAccidentes();
      refresher.complete();
    }, 3000)
  }
}

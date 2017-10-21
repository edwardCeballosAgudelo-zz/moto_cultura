import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NormaServiceProvider } from "../../providers/norma-service/norma-service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit{
  tipoNormas: any;

  constructor(public navCtrl: NavController, public tipoServices: NormaServiceProvider) { }

  ngOnInit(): void {
    this.getTypeNormas();
  }

  getTypeNormas() {
    this.tipoServices.getTypeNormas().then((tipoNorma) => {
      const respuesta = JSON.parse(tipoNorma['_body']);
      this.tipoNormas = respuesta.normaTypes;
    }).catch((err) => {
      console.log(err);
    });
  }

}

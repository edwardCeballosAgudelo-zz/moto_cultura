import { PuntoServiceProvider } from './../../providers/punto-service/punto-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker} from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  puntosAccidentes: any;
  map: any;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public googleMaps: GoogleMaps,
    public puntoServices: PuntoServiceProvider
  ) {}

  getPuntosAccidentes() {
    this.puntoServices.getPuntosAccidentes().then((punto) => {
      const respuesta = JSON.parse(punto['_body']);
      this.puntosAccidentes = respuesta.accidentPoints;

      for (var i = 0; i < this.puntosAccidentes.length; i++) {
        var element = this.puntosAccidentes[i];

        console.log(element)
        const myLatLng = {lat: element.latitud, lng: element.longitud};

        let marker = new google.maps.Marker({
          position: myLatLng,
          map: this.map
        });
      }

    }).catch((err) => {
      console.log(err);
    });
  }

  ionViewDidLoad(){
    this.getPosition();
  }

  getPosition():any{
    this.geolocation.getCurrentPosition()
    .then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    });

    this.getPuntosAccidentes();
  }
}

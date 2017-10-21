import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NormaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NormaServiceProvider {

  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello ProductServicesProvider Provider');
  }

  public getTypeNormas() {
    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });

    const optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise((resolve, reject) => {
      this.http.get('https://api-rest-edward.herokuapp.com/api/norma', optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }

  public newTypeNormas(postParams) {
    const body = 'nombre=' + postParams.name +
     '&descripcion=' + postParams.descripcion;

    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });

    const optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise((resolve, reject) => {
      this.http.post('https://api-rest-edward.herokuapp.com/api/norma', body, optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }

  public deleteTypeNorma(id) {
    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });

    const optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise((resolve, reject) => {
      this.http.delete('https://api-rest-edward.herokuapp.com/api/norma/' + id, optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }

  public updateTypeNormas(postParams) {
    const body = 'nombre=' + postParams.name +
     '&descripcion=' + postParams.descripcion;

    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });

    const optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise((resolve, reject) => {
      this.http.put('https://api-rest-edward.herokuapp.com/api/norma/' + postParams.id, body, optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }

}

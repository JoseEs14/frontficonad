import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetodosService {
  url = '/api/metodo';
  constructor(private http: HttpClient) { }

  // get
  getMetodos() {
    return this.http.get(this.url+'/con');
  }
  //get un nombre
  getMetodo(id: String) {
    return this.http.get(this.url + '/con/' + id);
  }
  //Agregar un nombre
  addMetodo(metodo:Metodo) {
    return this.http.post(this.url+ '/add' , metodo);
  }
  //Eliminar un nombre
  delMetodo(id: String) {
    return this.http.delete(this.url + '/del/' + id);
  }
  //Modificar un nombre
  updMetodo(id: String, metodo:Metodo) {
    return this.http.put(this.url + '/upd/' + id, metodo);
  }
}
export interface Metodo{
  id?:string;
  nombre?:string;
}
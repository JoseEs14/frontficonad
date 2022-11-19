import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  url = 'https://backficonad-production.up.railway.app/api/contrato';
  constructor(private http: HttpClient) { }

  // get
  getContratos() {
    return this.http.get(this.url+'/con');
  }
  //get un nombre
  getNContrato(id: String) {
    return this.http.get(this.url + '/con/' + id);
  }
  //Agregar un nombre
  addContrato(contrato: Contrato) {
    return this.http.post(this.url+ '/add' , contrato);
  }
  //Eliminar un nombre
  delContrato(id: String) {
    return this.http.delete(this.url + '/del/' + id);
  }
  //Modificar un nombre
  updContrato(id: String, contrato: Contrato) {
    return this.http.put(this.url + '/upd/' + id, contrato);
  }
}
export interface Contrato{
  id?:string;
  alias?:string;
  f_inicio:Date;
  f_fin:Date;
}

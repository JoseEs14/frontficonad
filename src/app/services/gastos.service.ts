import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  url = 'https://backficonad-production.up.railway.app/api/gasto';
  constructor(private http: HttpClient) { }

  // get
  getGastos() {
    return this.http.get(this.url + '/con');
  }
  //get un nombre
  getGasto(id: String) {
    return this.http.get(this.url + '/con/' + id);
  }

  //get gastos de un proyecto
  getGastoN(nombre: String) {
    return this.http.get(this.url + '/conn/' + nombre);
  }
  getGastoA(alias: String) {
    return this.http.get(this.url + '/cona/' + alias);
  }
  //Agregar un nombre
  addGasto(gasto: Gasto) {
    return this.http.post(this.url + '/add', gasto);
  }
  //Eliminar un nombre
  delGasto(id: String) {
    return this.http.delete(this.url + '/del/' + id);
  }
  //Modificar un nombre
  updGasto(id: String, gasto: Gasto) {
    return this.http.put(this.url + '/upd/' + id, gasto);
  }
}
export interface Gasto {
  id: string;
  concepto: string;
  cantidad?: Number;
  unidad?: string;
  proveedor: string;
  importe: Number;
  fecha: Date;
  observaciones?: string;
  id_proyecto: Number;
  id_pago: Number;
}
export interface gAnomaly {
  timestamp: Date;
  value: number;
}
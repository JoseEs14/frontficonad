import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url = 'https://backficonad-production.up.railway.app/api/proyecto';
  constructor(private http: HttpClient) { }

  // get
  getProyectos() {
    return this.http.get(this.url+'/con');
  }
  //get un nombre
  getProyecto(id: String) {
    return this.http.get(this.url + '/con/' + id);
  }
  //get gastos de proyecto
  getProyectosgastos() {
    return this.http.get(this.url + '/cong');
  }
  //get datos para las graficas de proyecto
  getProyectosgraficas() {
    return this.http.get(this.url + '/congr');
  }
  //Agregar un nombre
  addProyecto(proyecto: Proyecto) {
    return this.http.post(this.url+ '/add' , proyecto);
  }
  //Eliminar un nombre
  delProyecto(id: String) {
    return this.http.delete(this.url + '/del/' + id);
  }
  //Modificar un nombre
  updProyecto(id: String, proyecto: Proyecto) {
    console.log(this.http.put(this.url + 'upd',proyecto));
    return this.http.put(this.url + '/upd/'+id,proyecto);
    
  }
}
export interface Proyecto{
  id?:string;
  nombre:String;
  presupuesto?:Number;
  id_contrato?:String;
}

export interface Proyectog{
  id:string;
  nombre:String;
  presupuesto:number;
  id_contrato?:String;
  gastos:Number;
}

export interface Project{
  id:string;
  nombre:String;
  presupuesto:number;
  id_contrato?:String;
  gastos:Number;
  graficar:boolean;
}

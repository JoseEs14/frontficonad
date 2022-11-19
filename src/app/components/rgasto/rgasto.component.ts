import { Component, OnInit } from '@angular/core';
import { Gasto, GastosService } from 'src/app/services/gastos.service';
import { Router } from '@angular/router';
import { Proyecto, ProyectosService } from 'src/app/services/proyectos.service';
import { Metodo, MetodosService } from 'src/app/services/metodos.service';

@Component({
  selector: 'rgasto',
  templateUrl: './rgasto.component.html',
  styleUrls: ['./rgasto.component.css']
})
export class RgastoComponent implements OnInit {
  proyectos: Proyecto[];
  proyecto: Proyecto = {
    id: '',
    nombre: '',
    presupuesto: 0
  };
  metodos: Metodo[];
  metodo: Metodo = {
    id: '',
    nombre: ''
  };
  gasto: Gasto = {
    id: '',
    concepto: '',
    proveedor: '',
    importe: new Number(),
    fecha: new Date(),
    id_proyecto: new Number(),
    id_pago: new Number()
  };
  constructor(private gs: GastosService, private ps: ProyectosService, private ms: MetodosService, private r: Router) { 
    this.proyectos=[];
    this.metodos=[];
  }

  agregar() {
    if(this.gasto.id_proyecto==0){
      alert("Llene completamente los campos");
    }else{
      this.gs.addGasto(this.gasto).subscribe();
      window.location.reload();
    }
  }

  ngOnInit() { 
    this.getProyectos();
    this.getMetodos();
  }

  getProyectos() {
    this.ps.getProyectos().subscribe(
      res => {
        Object.assign(this.proyectos, res);
      },
      err => console.log(err)
    );
  }

  agregarMetodo() {
    delete this.metodo.id;
    this.ms.addMetodo(this.metodo).subscribe();
    this.r.navigate(['']);
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  getMetodos() {
    this.ms.getMetodos().subscribe(
      res => {
        Object.assign(this.metodos, res);
        console.log(this.metodos);
      },
      err => console.log(err)
    );
  }

  public onValueChanged1(selected: any): void {
    this.metodo.id = selected;
    console.log(this.metodo.id);
  }

  public onValueChanged2(selected: any): void {
    this.gasto.id_proyecto = selected;
  }

  
}
import { Component, OnInit } from '@angular/core';
import {Proyecto,  ProyectosService } from 'src/app/services/proyectos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Gasto, GastosService } from 'src/app/services/gastos.service';
import { Metodo, MetodosService } from 'src/app/services/metodos.service';

@Component({
  selector: 'app-mgasto',
  templateUrl: './mgasto.component.html',
  styleUrls: ['./mgasto.component.css']
})
export class MgastoComponent implements OnInit {
  proyectos: Proyecto[];
  metodos: Metodo[];
  metodo: Metodo = {
    id: '',
    nombre: ''
  };
  gastos: Gasto[];
  gasto: Gasto = {
    id:'',
    concepto:'',
    proveedor: '',
    importe: new Number,
    fecha: new Date,
    id_pago: new Number,
    id_proyecto: new Number
  };
  constructor(private ps: ProyectosService, private ms: MetodosService,private gs: GastosService, private r: Router, private activeRoute: ActivatedRoute) { 
    this.proyectos=[];
    this.gastos=[];
    this.metodos=[];
  }

  ngOnInit(): void {
    this.getProyectos();
    this.getMetodos();
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log(id_entrada);
    if (id_entrada) {
      this.gs.getGasto(id_entrada).subscribe(
        res => {
          Object.assign(this.gastos, res);
          this.load();
        },
        err => console.log(err)
      );
    }
  }
  load() {
    this.gastos.forEach(g => {
      Object.assign(this.gasto, g);
      console.log(this.gasto.fecha.getUTCFullYear)
    });
  }
  getProyectos() {
    this.ps.getProyectos().subscribe(
      res => {
        Object.assign(this.proyectos, res);
      },
      err => console.log(err)
    );
  }
  
  modificar() {
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    if (this.gasto.concepto=='' || this.gasto.id_pago==0 || this.gasto.id_proyecto==0 || this.gasto.proveedor=='' || this.gasto.importe==0) {
      alert("Llene completamente los campos");
    } else {
      this.gs.updGasto(id_entrada, this.gasto).subscribe();
      this.r.navigate(['']);
    }
  }

  agregarMetodo() {
    delete this.metodo.id;
    this.ms.addMetodo(this.metodo).subscribe();
    this.r.navigate(['/inicio']);
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

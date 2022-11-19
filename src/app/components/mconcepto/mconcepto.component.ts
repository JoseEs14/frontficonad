import { Component, OnInit } from '@angular/core';
import { Proyecto, ProyectosService } from 'src/app/services/proyectos.service';
import { Contrato, ContratosService } from 'src/app/services/contratos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mconcepto',
  templateUrl: './mconcepto.component.html',
  styleUrls: ['./mconcepto.component.css']
})
export class MconceptoComponent implements OnInit {
  contratos: Contrato[];
  proyectos: Proyecto[];
  proyecto: Proyecto = {
    id: '',
    nombre: '',
    presupuesto: new Number,
    id_contrato: ''
  };
  constructor(private ps: ProyectosService, private cs: ContratosService, private r: Router, private activeRoute: ActivatedRoute) {
    this.contratos = [];
    this.proyectos = [];
  }

  ngOnInit(): void {
    this.getContratos();
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    if (id_entrada) {
      this.ps.getProyecto(id_entrada).subscribe(
        res => {
          Object.assign(this.proyectos, res);
          this.load();
        },
        err => console.log(err)
      );
    }
  }
  load() {
    this.proyectos.forEach(p => {
      Object.assign(this.proyecto, p);
      console.log(this.proyecto)
    });
  }
  modificar() {
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];
    if (this.proyecto.nombre == '' || this.proyecto.id_contrato == '') {
      alert("Llene completamente los campos");
    } else {
      delete this.proyecto.id;
      this.ps.updProyecto(id_entrada, this.proyecto).subscribe();
      this.r.navigate(['/inicio']);
    }
  }

  getContratos() {
    this.cs.getContratos().subscribe(
      res => {
        Object.assign(this.contratos, res);
      },
      err => console.log(err)
    );
  }

  public onValueChanged(selected: any): void {
    this.proyecto.id_contrato = selected;
  }




}
import { Component, OnInit } from '@angular/core';
import { Gasto, GastosService } from 'src/app/services/gastos.service';
import { Proyecto, Proyectog, ProyectosService } from 'src/app/services/proyectos.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'reportexproy',
  templateUrl: './reportexproy.component.html',
  styleUrls: ['./reportexproy.component.css']
})
export class ReportexproyComponent implements OnInit {
  proyecto: Proyecto = {
    nombre: ''
  };
  nombreescroto: String;
  id_pr: String;
  gastos: Gasto[];
  public chart: any;
  proyectos: Proyectog[];
  labels: String[];
  gas: Number[];
  pres: Number[];
  constructor(private gs: GastosService, private ps: ProyectosService) {
    this.gastos = [];
    this.nombreescroto = '';
    this.id_pr = '';
    this.proyectos = [];
    this.labels = [];
    this.gas = [];
    this.pres = [];
  }

  ngOnInit(): void {
  }

  buscar() {
    if (this.chart) {
      this.chart.destroy();
    }
    this.gastos = [];
    this.id_pr = '';
    this.proyectos = [];
    this.labels = [];
    this.gas = [];
    this.pres = [];
    this.nombreescroto = this.proyecto.nombre
    if (this.proyecto.nombre == '') {
      alert("Escriba el nombre del proyecto que quiere consultar");
      window.location.reload();
    } else {
      this.gs.getGastoN(this.proyecto.nombre).subscribe(
        res => {
          Object.assign(this.gastos, res);
          this.id_pr = String(this.gastos[0].id_proyecto);
          console.log(this.gastos);
          this.getProyecto();
        },
        err => console.log(err)
      );
    }

  }
  eliminar(id: String) {
    let text = "¿Está seguro que desea eliminar este gasto?\nSeleccione OK o cancele de lo contrario";
    if (confirm(text) == true) {
      this.gs.delGasto(id).subscribe();
      window.location.reload();
    }
  }

  getProyecto() {
    this.ps.getProyecto(this.id_pr).subscribe(
      res => {
        Object.assign(this.proyectos, res);
        // console.log(this.proyectos);
        this.Val();
        this.createChart();
      },
      err => console.log(err)
    );
  }
  Val() {
    this.gastos.forEach((g) => {
      this.labels.push(g.concepto);
      this.gas.push(g.importe!);
    });
    this.proyectos.forEach((p) => {
      this.labels.push('Total');
      this.gas.push(p.presupuesto!);
    });
  }
  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const COLORS = [
      'red',
      'blue',
      'yellow',
      'pink',
      'orange',
      'green'
    ];
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labels,
        datasets: [
          {
            data: this.gas,
            backgroundColor: [
              'red',
              'blue',
              'yellow',
              'pink',
              'orange',
              'green'
            ]
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Proyectog, ProyectosService } from 'src/app/services/proyectos.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chart: any;
  proyectos: Proyectog[];
  labels: String[];
  gas: Number[];
  pres: Number[];
  constructor(private ps: ProyectosService) {
    this.proyectos = [];
    this.labels = [];
    this.gas = [];
    this.pres = [];
  }


  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos() {
    this.ps.getProyectosgastos().subscribe(
      res => {
        Object.assign(this.proyectos,res);
        this.Val();
        this.createChart();
      },
      err => console.log(err)
    );
  }
  Val() {
    this.proyectos.forEach((p) => {
      console.log(p.nombre);
      this.labels.push(p.nombre!);
      this.gas.push(p.gastos);
      this.pres.push(p.presupuesto!);
    });
  }
  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labels,
        datasets: [
          {
            label: "Presupuesto",
            data: this.pres,
            backgroundColor: 'blue'
          },
          {
            label: "Gastado",
            data: this.gas,
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

}

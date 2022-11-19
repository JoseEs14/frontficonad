import { Component, OnInit } from '@angular/core';
import { Proyectog, Project, ProyectosService } from 'src/app/services/proyectos.service';
import Chart, { ChartItem } from 'chart.js/auto';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chart: any[];
  proyectos: Proyectog[];
  project: Project[];
  labels: String[];
  gas: Number[];
  pres: Number[];
  idg: string[];
  g: boolean = false;
  constructor(private ps: ProyectosService) {
    this.proyectos = [];
    this.labels = [];
    this.gas = [];
    this.pres = [];
    this.idg = [];
    this.chart = [];
    this.project = [];
  }


  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos() {
    this.ps.getProyectosgastos().subscribe(
      res => {
        Object.assign(this.proyectos, res);
        Object.assign(this.project, res);
        this.Val();
      },
      err => console.log(err)
    );
  }
  Val() {
    this.proyectos.forEach((p) => {
      this.labels.push(p.nombre!);
      this.gas.push(p.gastos);
      this.pres.push(p.presupuesto!);
      this.idg.push(<string>p.nombre);
    });
  }
  createChart(id: String, i: number) {
    var ctx: ChartItem;
    ctx = <ChartItem>document.getElementById(<string>id);
    console.log("///// dos")
    console.log(i);
    let aux: String[];
    aux = [];
    aux.push(this.labels[i]);
    console.log(aux);
    let auxPres: Number[] = [];
    auxPres.push(this.pres[i]);
    console.log(auxPres);
    let auxGast: Number[] = [];
    auxGast.push(this.gas[i]);
    console.log(auxGast);
    this.chart[i] = new Chart(ctx, {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: aux,
        datasets: [
          {
            label: "Presupuesto",
            data: auxPres,
            backgroundColor: 'blue'
          },
          {
            label: "Gastado",
            data: auxGast,
            backgroundColor: 'yellow'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
  crear() {
    var i = 0;
    this.project.forEach((e) => {
      if (this.isCheck(e.id, i)) {
        if (this.project[i].graficar) {
          this.createChart(e.nombre, i);
        }
      }
      i++;
    });
  }

  isCheck(name: string, index: number): boolean {
    const checkbox = document.getElementById(name) as HTMLInputElement | null;
    if (checkbox?.checked) {
      this.project[index].graficar = true;
      if (this.chart[index]) {
        this.chart[index].destroy();
      }
      return true;
    } else {
      this.project[index].graficar = false;
      if (this.chart[index]) {
        this.chart[index].destroy();
      }
      return false;
    }
  }

}

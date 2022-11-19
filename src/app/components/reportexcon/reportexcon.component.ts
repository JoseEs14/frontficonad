import { Component, OnInit } from '@angular/core';
import { Gasto, gAnomaly, GastosService } from 'src/app/services/gastos.service';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';
import { Contrato, ContratosService } from 'src/app/services/contratos.service';
import {
  AnomalyDetectorClient,
  DetectChangePointRequest,
  DetectChangePointResponse,
  TimeSeriesPoint,
  DetectEntireResponse,
  KnownTimeGranularity
} from "@azure/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";

@Component({
  selector: 'reportexcon',
  templateUrl: './reportexcon.component.html',
  styleUrls: ['./reportexcon.component.css']
})
export class ReportexconComponent implements OnInit {
  contrato: Contrato = {
    alias: '',
    f_fin: new Date,
    f_inicio: new Date
  };
  nombreescroto: String;
  id_c: String;
  bv: boolean;
  da: boolean = false;
  gastos: Gasto[];
  contratos: Contrato[];
  public chart: any;
  labels: String[];
  gas: Number[];
  pres: Number[];
  anomaly: gAnomaly[];
  al: number[];
  constructor(private gs: GastosService, private cs: ContratosService, private r: Router) {
    this.gastos = [];
    this.contratos = [];
    this.nombreescroto = '';
    this.id_c = '';
    this.labels = [];
    this.bv = false;
    this.gas = [];
    this.pres = [];
    this.anomaly = [];
    this.al = [];
  }

  ngOnInit(): void {
  }

  buscar() {
    if (this.chart) {
      this.chart.destroy();
    }
    this.gastos = [];
    this.id_c = '';
    this.bv = false;
    this.labels = [];
    this.gas = [];
    this.pres = [];
    this.nombreescroto = <String>this.contrato.alias;
    if (this.contrato.alias == '') {
      alert("Escriba el nombre del contrato que quiere consultar");
      window.location.reload();
    } else {
      this.gs.getGastoA(<String>this.contrato.alias).subscribe(
        res => {
          Object.assign(this.gastos, res);
          if (this.gastos.length == 0) {
            this.bv = true;
          } else {
            this.id_c = String(this.gastos[0].id_proyecto);
            console.log(this.gastos);
            this.getContrato();
          }
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

  getContrato() {
    this.cs.getNContrato(this.id_c).subscribe(
      res => {
        Object.assign(this.contratos, res);
        // console.log(this.proyectos);
        this.Val();
        this.createChart();
      },
      err => console.log(err)
    );
  }


  Val() {
    this.anomaly = [];
    console.log(this.anomaly);
    this.gastos.forEach((g) => {
      const an = {
        timestamp: new Date,
        value: 0
      };
      an.timestamp = g.fecha;
      an.value = <number>g.importe;
      console.log(an);
      this.anomaly.push(an);
      this.labels.push(g.concepto);
      this.gas.push(g.importe!);
      console.log(this.anomaly);
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
  modificar(id: String) {
    this.r.navigate(['/mgasto/' + id]);
  }

  Anomalias() {
    const aly = this.anomaly;
    const gg: number[] = [];
    aly.sort();
    const x = document.getElementById("values") as HTMLElement;;
    const apiKey = "9e6a092117924c7d8ba9f377ac620b56" || "";
    const endpoint = "https://anomalydetectormaeq.cognitiveservices.azure.com/" || "";
    gg.forEach((el) => {
      this.al.push(el);
    });
    console.log(gg);
    async function main() {
      const client = new AnomalyDetectorClient(endpoint, new AzureKeyCredential(apiKey));
      // construct request
      const request = {
        series: aly,
        granularity: KnownTimeGranularity.none
      };
      const result: DetectEntireResponse = await client.detectEntireSeries(request);
      if (
        result.isAnomaly.some(function (anomaly) {
          return anomaly === true;
        })
      ) {
        console.log("Anomalies were detected from the series at index:");
        result.isAnomaly.forEach(function (anomaly, index) {
          if (anomaly === true) {
            console.log(index);
            gg.push(index);
          }
          x.innerHTML=String(gg);
        }
        );
      } else {
        console.log("There is no anomaly detected from the series.");
        x.innerHTML="There is no anomaly detected from the series.";
      }
      
    }
    main().catch((err) => {
      console.error("The sample encountered an error:", err);
      x.innerHTML="There is no anomaly detected from the series.";
    });
  }

}

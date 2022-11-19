import { Component, OnInit } from '@angular/core';
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
  selector: 'anomaly',
  templateUrl: './anomaly.component.html',
  styleUrls: ['./anomaly.component.css']
})
export class AnomalyComponent implements OnInit {
  public chart: any;
  labels: String[];
  
  constructor() {
    this.labels=[];
    const apiKey = "9e6a092117924c7d8ba9f377ac620b56" || "";
    const endpoint = "https://anomalydetectormaeq.cognitiveservices.azure.com/" || "";
    async function main() {
      const client = new AnomalyDetectorClient(endpoint, new AzureKeyCredential(apiKey));
      // construct request
      var request = {
        series: [
          { timestamp: new Date("2018-03-01T00:00:00Z"), value: 32858923 },
          { timestamp: new Date("2018-03-02T00:00:00Z"), value: 29615278 },
          { timestamp: new Date("2018-03-03T00:00:00Z"), value: 22839355 },
          { timestamp: new Date("2018-03-04T00:00:00Z"), value: 25948736 },
          { timestamp: new Date("2018-03-05T00:00:00Z"), value: 34139159 },
          { timestamp: new Date("2018-03-06T00:00:00Z"), value: 33843985 },
          { timestamp: new Date("2018-03-07T00:00:00Z"), value: 33637661 },
          { timestamp: new Date("2018-03-08T00:00:00Z"), value: 32627350 },
          { timestamp: new Date("2018-03-09T00:00:00Z"), value: 29881076 },
          { timestamp: new Date("2018-03-10T00:00:00Z"), value: 22681575 },
          { timestamp: new Date("2018-03-11T00:00:00Z"), value: 24629393 },
          { timestamp: new Date("2018-03-12T00:00:00Z"), value: 34010679 },
          { timestamp: new Date("2018-03-13T00:00:00Z"), value: 33893888 },
          { timestamp: new Date("2018-03-14T00:00:00Z"), value: 33760076 },
          { timestamp: new Date("2018-03-15T00:00:00Z"), value: 33093515 }
        ],
        granularity: KnownTimeGranularity.daily
      };

      // get change point detect results
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
          }
        });
      } else {
        console.log("There is no anomaly detected from the series.");
      }
      /*const result: DetectChangePointResponse = await client.detectChangePoint(request);
      if (
        result.isChangePoint!.some(function (changePoint) {
          return changePoint === true;
        })
      ) {
        console.log("Change points were detected from the series at index:");
        result.isChangePoint!.forEach(function (changePoint, index) {
          if (changePoint === true) console.log(index);
        });
      } else {
        console.log("There is no change point detected from the series.");
      }*/
      // output:
      // Change points were detected from the series at index:
      // 9
    }

    main().catch((err) => {
      console.error("The sample encountered an error:", err);
    });
  }

  ngOnInit(): void {
  }
  /*createChart() {
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
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labels,
        datasets: [
          {
            data: this.request[0],
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
  }*/
}

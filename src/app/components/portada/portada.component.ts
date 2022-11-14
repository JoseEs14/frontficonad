import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.listarNombres();
  }

  listarNombres(){
    console.log("Hola")
  }
}

import { Component, OnInit } from '@angular/core';
import { Proyecto, ProyectosService } from 'src/app/services/proyectos.service';
import { Contrato, ContratosService } from 'src/app/services/contratos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rconcepto',
  templateUrl: './rconcepto.component.html',
  styleUrls: ['./rconcepto.component.css']
})
export class RconceptoComponent implements OnInit {
  contratos: Contrato[];
  proyecto: Proyecto = {
    id: '',
    nombre: '',
    id_contrato: ''
  };
  constructor(private ps: ProyectosService, private cs: ContratosService, private r: Router) {
    this.contratos = [];
  }

  ngOnInit(): void {
    this.getContratos();
  }

  agregar() {
    if(this.proyecto.nombre=='' || this.proyecto.id_contrato==''){
      alert("Llene completamente los campos");
    }else{
      delete this.proyecto.id;
      this.ps.addProyecto(this.proyecto).subscribe();
      window.location.reload();
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

import { Component, OnInit } from '@angular/core';
import {Contrato, ContratosService } from 'src/app/services/contratos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'robra',
  templateUrl: './robra.component.html',
  styleUrls: ['./robra.component.css']
})
export class RobraComponent implements OnInit {
  contrato:Contrato={
    id:'',
    alias:'',
    f_inicio:new Date(),
    f_fin:new Date()
  };
  constructor(private cs:ContratosService,private r:Router) { }

  ngOnInit(): void {
  }

  

  agregar(){
    if(this.contrato.id=='' || this.contrato.alias==''){
      alert("Llene completamente los campos");
    }else if(this.contrato.f_fin<this.contrato.f_inicio){
      alert("La fecha de fin no puede ser menor a la de inicio");
    }
    else{
      this.cs.addContrato(this.contrato).subscribe();
      window.location.reload();
    }
  }
  
}

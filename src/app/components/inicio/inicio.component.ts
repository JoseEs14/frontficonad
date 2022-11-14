import { Component, OnInit } from '@angular/core';
import { Proyectog, ProyectosService } from 'src/app/services/proyectos.service';
import { Contrato, ContratosService } from 'src/app/services/contratos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  proyectos: Proyectog[];
  constructor(private ps: ProyectosService, private r: Router) {
    this.proyectos = [];
  }

  ngOnInit(): void {
    this.getProyectos();
    console.log(this.proyectos);
  }

  getProyectos() {
    this.ps.getProyectosgastos().subscribe(
      res => {
        Object.assign(this.proyectos, res);
      },
      err => console.log(err)
    );
  }

  eliminar(id:String){
    let text = "¿Está seguro que desea eliminar este proyecto?\nSeleccione OK o cancele de lo contrario";
    if (confirm(text) == true) {
      this.ps.delProyecto(id).subscribe();
      window.location.reload();
    }
  }

  modificar(id:String){
    this.r.navigate(['/mconcepto/'+id]);
  }
}

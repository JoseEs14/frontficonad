import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ContratosService } from 'src/app/services/contratos.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private UsersService:UsersService,private ContratosService:ContratosService, private ps:ProyectosService) { }

  ngOnInit(): void {
  }
  listarUsers(){
    this.UsersService.getUsers().subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    );
  }
  listarContratos(){
    this.ContratosService.getContratos().subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    );
  }
  listarProyectos(){
    this.ps.getProyectos().subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    );
  }
}

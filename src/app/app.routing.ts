import { ModuleWithProviders  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { PortadaComponent } from './components/portada/portada.component';
import { RconceptoComponent } from './components/rconcepto/rconcepto.component';
import { RobraComponent } from './components/robra/robra.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RgastoComponent} from './components/rgasto/rgasto.component';
import { UsersComponent } from './components/users/users.component';
import { ReportexproyComponent } from './components/reportexproy/reportexproy.component';
import { MconceptoComponent } from './components/mconcepto/mconcepto.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'portada',component:PortadaComponent},
  {path:'robra',component:RobraComponent},
  {path:'rconcepto',component:RconceptoComponent},
  {path:'rgasto',component:RgastoComponent},
  {path:'users',component:UsersComponent},
  {path:'reportexproy',component:ReportexproyComponent},
  {path:'mconcepto/:id',component:MconceptoComponent},
  {path: '**', component:InicioComponent}
];

export const appRoutingProviders: any[] = []; 
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
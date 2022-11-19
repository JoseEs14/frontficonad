import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenubarComponent} from './components/menubar/menubar.component';
import { PortadaComponent } from './components/portada/portada.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { RobraComponent } from './components/robra/robra.component';
import { RconceptoComponent } from './components/rconcepto/rconcepto.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { RgastoComponent } from './components/rgasto/rgasto.component';
import { UsersComponent } from './components/users/users.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReportexproyComponent } from './components/reportexproy/reportexproy.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MconceptoComponent } from './components/mconcepto/mconcepto.component';
import { MgastoComponent } from './components/mgasto/mgasto.component';
import { ReportexconComponent } from './components/reportexcon/reportexcon.component';
import { AnomalyComponent } from './components/anomaly/anomaly.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'portada',component:PortadaComponent},
  {path:'robra',component:RobraComponent},
  {path:'rconcepto',component:RconceptoComponent},
  {path:'rgasto',component:RgastoComponent},
  {path:'users',component:UsersComponent},
  {path:'reportexproy',component:ReportexproyComponent},
  {path:'reportexcon',component:ReportexconComponent},
  {path:'anomaly',component:AnomalyComponent},
  {path:'mconcepto/:id',component:MconceptoComponent},
  {path:'mgasto/:id',component:MgastoComponent},
  {path: '**', component:InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenubarComponent,
    PortadaComponent,
    CaracteristicasComponent,
    RobraComponent,
    RconceptoComponent,
    RgastoComponent,
    UsersComponent,
    InicioComponent,
    ReportexproyComponent,
    DashboardComponent,
    MconceptoComponent,
    MgastoComponent,
    ReportexconComponent,
    AnomalyComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

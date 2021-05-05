import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import	{HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import {ErrorComponent} from './components/error/error.component';
import {RegistroComponent} from './components/registro/registro.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ResultadosComponent } from './components/resultados/resultados.component';



const routes: Routes = [  
  { path: 'Login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'QuienSoy', component: QuienSoyComponent },
  { path: 'Resultados', component: ResultadosComponent },
  { path: 'Encuesta', component: EncuestaComponent },
  { path: 'Juegos', loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule) },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: '', component: LoginComponent},  
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

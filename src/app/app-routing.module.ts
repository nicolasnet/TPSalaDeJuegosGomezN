import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import	{HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import {ErrorComponent} from './components/error/error.component';
import {RegistroComponent} from './components/registro/registro.component'



const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { MemotestComponent } from './memotest/memotest.component';
import { PiedrapapeltijeraComponent } from './piedrapapeltijera/piedrapapeltijera.component';
import { TatetiComponent } from './tateti/tateti.component';



const routes: Routes = [
  { path: 'Juegos', component: JuegosComponent },
  { path: 'PPT', component: PiedrapapeltijeraComponent },
  { path: 'Tateti', component: TatetiComponent },
  { path: 'Memotest', component: MemotestComponent },
  { path: '', redirectTo: 'Juegos', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }

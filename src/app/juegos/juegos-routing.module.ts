import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonComponent } from './dragon/dragon.component';
import { JuegosComponent } from './juegos.component';
import { MemotestComponent } from './memotest/memotest.component';
import { PiedrapapeltijeraComponent } from './piedrapapeltijera/piedrapapeltijera.component';
import { TatetiComponent } from './tateti/tateti.component';



const routes: Routes = [
  { path: 'Juegos', component: JuegosComponent },
  { path: 'PPT', component: PiedrapapeltijeraComponent },
  { path: 'Tateti', component: TatetiComponent },
  { path: 'Memotest', component: MemotestComponent },
  { path: 'Dragon', component: DragonComponent },
  { path: '', redirectTo: 'Juegos', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';
import { PiedrapapeltijeraComponent } from './piedrapapeltijera/piedrapapeltijera.component';
import { TatetiComponent } from './tateti/tateti.component';
import { MemotestComponent } from './memotest/memotest.component';


@NgModule({
  declarations: [
    JuegosComponent,
    PiedrapapeltijeraComponent,
    TatetiComponent,
    MemotestComponent
  ],
  imports: [
    FormsModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }

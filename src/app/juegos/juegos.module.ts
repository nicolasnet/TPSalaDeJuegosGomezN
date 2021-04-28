import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';
import { PiedrapapeltijeraComponent } from './piedrapapeltijera/piedrapapeltijera.component';
import { TatetiComponent } from './tateti/tateti.component';
import { MemotestComponent } from './memotest/memotest.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    JuegosComponent,
    PiedrapapeltijeraComponent,
    TatetiComponent,
    MemotestComponent
  ],
  imports: [
    FormsModule,
    JuegosRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class JuegosModule { }

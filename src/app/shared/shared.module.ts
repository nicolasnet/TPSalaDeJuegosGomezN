import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    SharedComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ChatComponent
  ]
})
export class SharedModule { }

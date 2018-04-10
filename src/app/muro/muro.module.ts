import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuroDemoComponent } from './muro-demo/muro-demo.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
   exports: [
     MatToolbarModule
   ],
  declarations: [MuroDemoComponent]
})
export class MuroModule { }

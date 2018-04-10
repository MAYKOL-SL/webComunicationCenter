import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuroDemoComponent } from './muro/muro-demo/muro-demo.component';

const routes: Routes = [
  {
    path: 'muro-demo',
    component: MuroDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

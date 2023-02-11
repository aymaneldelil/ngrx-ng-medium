import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page403Component } from './components/page403/page403.component';
import { Page404Component } from './components/page404/page404.component';



@NgModule({
  declarations: [
    Page403Component,
    Page404Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Page404Component,
    Page403Component
  ]
})
export class CoreModule { }

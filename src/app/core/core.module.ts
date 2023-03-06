import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page403Component } from './components/page403/page403.component';
import { Page404Component } from './components/page404/page404.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
//-------------------------------------------------------------------------------------------------------------------------------------------
@NgModule({
  declarations: [Page403Component, Page404Component],
  imports: [CommonModule, StoreModule.forRoot(reducers)],
  exports: [Page404Component, Page403Component],
})
export class CoreModule {}

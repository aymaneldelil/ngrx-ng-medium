import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessageComponent } from './component/backend-error-message/backend-error-message.component';
//------------------------------------------------------------------------------------------------------------------------
@NgModule({
  declarations: [
    BackendErrorMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BackendErrorMessageComponent
  ]
})
export class BackendErrorMessageModule { }

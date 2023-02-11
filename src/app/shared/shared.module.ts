import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { AngularMaterialModule } from '../feature/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonPrimaryComponent } from './button/button-primary/button-primary.component';
@NgModule({
  declarations: [FormFieldComponent , ButtonPrimaryComponent],
  imports: [CommonModule, AngularMaterialModule , ReactiveFormsModule],
  exports:[ButtonPrimaryComponent]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent, SignupComponent],

imports: [CommonModule, AuthRoutingModule, AngularMaterialModule , AuthRoutingModule , ReactiveFormsModule] 
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from '../../../core/store/auth/auth-effect';
import { PrimarybtnModule } from 'src/app/shared/primarybtn/primarybtn.module';
import { BackendErrorMessageModule } from 'src/app/shared/backend-error-message/backend-error-message.module';
@NgModule({
  declarations: [SigninComponent, SignupComponent],

  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PrimarybtnModule,
    BackendErrorMessageModule,
    HttpClientModule,
    EffectsModule.forFeature([AuthEffect]),
  ],
  providers: [AuthService],
})
export class AuthModule {}

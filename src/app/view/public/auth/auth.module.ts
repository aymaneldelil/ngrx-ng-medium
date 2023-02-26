import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer/auth-reducer';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effect/auth-effect';
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
    StoreModule.forFeature('auth', reducers),
    HttpClientModule,
    EffectsModule.forFeature([RegisterEffect]),
  ],
  providers: [AuthService],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer/auth-reducer';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effect/auth-effect';

@NgModule({
  declarations: [SigninComponent, SignupComponent],

  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('auth', reducers),
    HttpClientModule,
    EffectsModule.forFeature([RegisterEffect])
  ],
  providers: [AuthService],
})
export class AuthModule {}

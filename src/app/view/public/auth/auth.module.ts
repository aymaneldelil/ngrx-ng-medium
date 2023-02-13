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

@NgModule({
  declarations: [SigninComponent, SignupComponent],

  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('auth',reducers)
  ],
})
export class AuthModule {}

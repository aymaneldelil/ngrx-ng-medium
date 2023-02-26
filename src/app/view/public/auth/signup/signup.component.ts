import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { IRegisterReq } from '../interface/i-register-req';
import { Ibackenderror } from '../interface/ibackenderror';
import { AuthService } from '../services/auth.service';
import { registerAction } from '../store/action/aut-action';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selector/aut-selector';

//-------------------------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signUp_fg!: FormGroup;
  public isSubmitted$: Observable<boolean> = new Observable();
  public validationError$:Observable<Ibackenderror | null> = new Observable();
  constructor(private _fb: FormBuilder, private _store: Store , private _authSVC:AuthService) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.signupForm();
    this.intializeValues();
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  private signupForm() {
    this.signUp_fg = this._fb.group({
      username: [null, [Validators.required, Validators.minLength(6)]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      password: [null, Validators.required],
    });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  formSubmit() {
    const req: IRegisterReq = {
      user: this.signUp_fg.value,
    };
    this._store.dispatch(registerAction({ req }));
    // this._authSVC.userRegister(req).subscribe()
    this.validationError$ = this._store.pipe(select(validationErrorsSelector))
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  private intializeValues(): void {
    this.isSubmitted$ = this._store.pipe(select(isSubmittingSelector));
  }
}

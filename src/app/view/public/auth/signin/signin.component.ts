import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ILoginReq } from '../interface/i-login-req';
import { Ibackenderror } from '../interface/ibackenderror';
import { loginAction } from '../store/action/aut-action';
import { validationErrorsSelector } from '../store/selector/aut-selector';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public signin_fg!: FormGroup;
  public validationError$:Observable<Ibackenderror | null> = new Observable();
  constructor(private _fb: FormBuilder, private _store: Store) {}
  //---------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.signinForm();
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private signinForm(): void {
    this.signin_fg = this._fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      password: [null, [Validators.required]],
    });
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public formSubmit() {
    const req: ILoginReq = {
      user: this.signin_fg.value,
    };
    this._store.dispatch(loginAction({ req }));
    this.validationError$ = this._store.pipe(select(validationErrorsSelector))
  }
}

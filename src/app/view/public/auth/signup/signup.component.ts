import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { registerAction } from '../store/action/aut-action';
import { isSubmittingSelector } from '../store/selector/aut-selector';

//-------------------------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signUp_fg!: FormGroup;
  public isSubmitted$: Observable<boolean> = new Observable();
  constructor(private _fb: FormBuilder, private _store: Store) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.signupForm();
    this.intializeValues();
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  private signupForm() {
    this.signUp_fg = this._fb.group({
      userName_fc: [null, [Validators.required, Validators.minLength(6)]],
      userEmail_fc: [
        null,
        [
          Validators.required,
          Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      userPass_fc: [null, Validators.required],
    });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  formSubmit() {
    console.log(this.signUp_fg);
    this._store.dispatch(registerAction(this.signUp_fg.value));
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  private intializeValues(): void {
    this.isSubmitted$ = this._store.pipe(select(isSubmittingSelector));
  }
}

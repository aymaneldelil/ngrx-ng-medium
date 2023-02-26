import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public signin_fg!: FormGroup;
  constructor(private _fb: FormBuilder) {}
  //---------------------------------------------------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.signinForm();
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private signinForm(): void {
    this.signin_fg = this._fb.group({
      email: [
        null,
        Validators.required,
        Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ],
      password: [null, Validators.required],
    });
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public formSubmit() {}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//-------------------------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signUp_fg!: FormGroup;
  constructor(private _fb: FormBuilder) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.signupForm();
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------
  private signupForm() {
    this.signUp_fg = this._fb.group({
      userName_fc: [null, Validators.required],
      userEmail_fc: [null, Validators.required],
      userPass_fc: [null, Validators.required],
    });
  }
}

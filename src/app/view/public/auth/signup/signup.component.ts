import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../state/aut-action';

//-------------------------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signUp_fg!: FormGroup;
  constructor(private _fb: FormBuilder ,
    private _store:Store) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.signupForm();
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  private signupForm() {
    this.signUp_fg = this._fb.group({
      userName_fc: [null, [Validators.required  , Validators.minLength(6)] ] ,
      userEmail_fc: [null, [Validators.required , Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      userPass_fc: [null, Validators.required],
    });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  formSubmit(){
    console.log(this.signUp_fg);
    this._store.dispatch(registerAction(this.signUp_fg.value))
    
  }
  // testfc(){
  //   console.log(this.signUp_fg.get('userName_fc')?.errors);

  // }
}

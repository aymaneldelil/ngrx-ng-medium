import { Component, Input, OnInit } from '@angular/core';
import { map, of } from 'rxjs';
import { Ibackenderror } from 'src/app/view/public/auth/interface/ibackenderror';

@Component({
  selector: 'backend-error-message',
  templateUrl: './backend-error-message.component.html',
  styleUrls: ['./backend-error-message.component.scss'],
})
export class BackendErrorMessageComponent implements OnInit {
  @Input('backendError') backendErrorProps!: Ibackenderror | null;
  public errorMessages: Array<string> = [];
  //---------------------------------------------------------------------------------------------------------------------------------------------
  constructor() {}
  //---------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    of(this.backendErrorProps!)
      .pipe(
        map((m) => {
          return m['errors'];
        }),
        map((m: object) => {
          Object.entries(m).map(err =>{
            this.errorMessages.push(`${err[0]} ${err[1]}`)         
          })
        })
      )
      .subscribe();
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  initialValues() {}
}

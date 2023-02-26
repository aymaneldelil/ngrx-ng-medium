import { Component, Input, OnInit } from '@angular/core';
import { Ibackenderror } from 'src/app/view/public/auth/interface/ibackenderror';

@Component({
  selector: 'backend-error-message',
  templateUrl: './backend-error-message.component.html',
  styleUrls: ['./backend-error-message.component.scss'],
})
export class BackendErrorMessageComponent implements OnInit {
  @Input() backendErrorProps: Ibackenderror | null  ={};
  public errorMessages: Array<string> = [];
  //---------------------------------------------------------------------------------------------------------------------------------------------
  constructor() {}
  //---------------------------------------------------------------------------------------------------------------------------------------------

  ngOnInit(): void {}
  //---------------------------------------------------------------------------------------------------------------------------------------------

  initialValues() {}
}

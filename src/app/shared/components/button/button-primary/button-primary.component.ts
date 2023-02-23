import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tButtonColor , tButtonType } from '../enums/buttun-enum';

@Component({
  selector: 'app-button',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() type: tButtonType = 'text';
  @Input() text: string = '';
  @Input() isDisabled: boolean = false;
  @Input() color:tButtonColor  = 'lite';
  @Output() btnClick = new EventEmitter;

  constructor() {}

  ngOnInit(): void {}

  onClick(){    
    this.btnClick.emit()
  }
}

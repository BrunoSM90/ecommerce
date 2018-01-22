import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  @Input() mostrarErro: boolean;
  @Input() msgErro: string;

  constructor() { }

  ngOnInit() {
  }

}

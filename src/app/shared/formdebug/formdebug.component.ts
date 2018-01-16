import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formdebug',
  templateUrl: './formdebug.component.html',
  styleUrls: ['./formdebug.component.css']
})
export class FormdebugComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit() {
  }

}

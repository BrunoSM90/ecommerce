import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class MovieformComponent implements OnInit {

  movie: any = {
    nome: null,
    duracao: 210,
    ano: 1997,
    id: 20
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
  }

}

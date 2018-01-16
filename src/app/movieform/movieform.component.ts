import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(response => response)
    .subscribe(response => {
      console.log(response);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {

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

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(response => response)
    .subscribe(response => {
      console.log(response);
    },
    (error => console.log('error'))
  );
  }

}

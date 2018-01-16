import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Serie } from '../models/serie.model';

@Component({
  selector: 'app-serieform',
  templateUrl: './serieform.component.html',
  styleUrls: ['./serieform.component.css']
})
export class SerieformComponent implements OnInit {

  serie: Serie;

  form: FormGroup;

  constructor(
    private http: Http,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null],
    });
  }

onSubmit() {

  this.http.post('https://httpbin.org/post', JSON.parse(this.form.value))
  .map(response => response)
  .subscribe
  (response => console.log(response),
  (error => console.log('error: ', error)));
}

}

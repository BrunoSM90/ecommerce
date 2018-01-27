import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { Movie } from '../../models/movie.model';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {

  movie: Movie;

  form: FormGroup;

  constructor(private http: Http,
              private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [22, Validators.required],
      nome: ['Saw', Validators.required],
      duracao: [149, Validators.required],
      ano: [2017, [Validators.required, Validators.maxLength(4)]]
    });

  }

  fieldValidate(field) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  cssErrorApply(field) {
    return {'has-error': this.fieldValidate(field)};
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);

      this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
      .map(response => response)
      .subscribe(response => {
        this.form.reset();
        console.log(response);
      },
      (error => console.log('error'))
    );
    } else {
      window.alert('Formulário Inválido');
      // this.verificaValidacoesForm(form);
    }

  }

  /*verificaValidacoesForm(form: FormGroup) {
  Object.keys(form.controls).forEach(field => {
    console.log(field);
    const controls = this.form.get(field);
    controls.markAsDirty();

    if (controls instanceof FormGroup) {
      this.verificaValidacoesForm(controls);
    }
  });
} */

}

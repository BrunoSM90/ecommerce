import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Serie } from '../../models/serie.model';

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
      id: [22, Validators.required],
      nome: ['Série qualquer', Validators.required],
      duracao: [129, Validators.required],
      ano: [1990, [Validators.required, Validators.maxLength(4)]]
    });
  }

onSubmit() {

  console.log(this.form.value);

  if (this.form.valid) {
    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
    .map(response => response)
    .subscribe
    (response => {
      // this.form.reset();
      console.log(response);
    },
    (error: any ) => alert('error'));
  } else {
    window.alert('Formulário inválido');
    // this.verificaValidacoesForm(this.form);
  }
}

verificaCampo(field) {
  return !this.form.get(field).valid && this.form.get(field).touched;
}

aplicaCssErro(field) {
  return {
     'has-error': this.verificaCampo(field),
  };
}

/*verificaValidacoesForm(form: FormGroup) {
  Object.keys(form.controls).forEach(field => {
    console.log(field);
    const controls = this.form.get(field);
    controls.markAsDirty();

    if (controls instanceof FormGroup) {
      this.verificaValidaçõesForm(controls);
    }
  });
} */


}

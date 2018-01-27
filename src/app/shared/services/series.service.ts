import { Injectable } from '@angular/core';

@Injectable()
export class SeriesService {

series_List: any[] = [
  {id: 1, nome: 'The Big Bang Theory', episodios: '185', ano: '2009'},
  {id: 2, nome: 'The Flash', episodios: '58', ano: '2015'},
  {id: 3, nome: 'The Exorcist', episodios: '70', ano: '2016'},
  {id: 4, nome: 'Agents of S.H.I.E.L.D.', episodios: '97', ano: '2013'}
];

  constructor() { }

  getSeries() {
    return this.series_List;
  }

  // Não utilizar triple equals.

  getSerie(id: number) {
    const series = this.getSeries();
    for (let i = 0; i < series.length; i++) {
      const serie = series[i];
      if (serie.id == id) {
        return serie;
      }
    }
      return null;
    }
  }

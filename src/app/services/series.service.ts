import { Injectable } from '@angular/core';

@Injectable()
export class SeriesService {

series_List: string[] = ['The Big Bang Theory', 'The Flash', 'The Exorcist', 'Stranger Things'];

  constructor() { }

  getSeries() {
    return this.series_List;
  }

}

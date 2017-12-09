import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  movies_List: string[] = ['Scarface', 'Godzilla', 'Titanic'];

  constructor() { }

  getMovies()  {
    return this.movies_List;
  }

}

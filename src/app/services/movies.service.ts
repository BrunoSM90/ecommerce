import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  movie: any;
  movies: any[];

  movies_List: any[] = [
    {id: 1, nome: 'Godzilla', duracao: 160, ano: 1999},
    {id: 2, nome: 'Scarface', duracao: 128, ano: 1979},
    {id: 3, nome: 'The Exorcist', duracao: 106, ano: 1960},
    {id: 4, nome: 'Twilight', duracao: 145, ano: 2011}
  ];

  constructor() { }

  getMovies()  {
    return this.movies_List;
  }

  getMovie(id: number) {
    let movies = this.getMovies();

    for (let i = 0; i < movies.length; i++) {
      let movie = movies[i];
      if (movie.id == id) {
        return movie;
      }
    }
      return null;
    }

  }



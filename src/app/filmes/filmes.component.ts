import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  movies_List: string[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

getMovies() {
  this.movies_List = this.moviesService.getMovies();
}

}

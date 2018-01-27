import { MoviesService } from './../services/movies.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  @ViewChild('newMovieModal') newMovieModal;

  movieFilter = '';

  movies_List: string[];

  constructor(private moviesService: MoviesService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies_List = this.moviesService.getMovies();
  }

  doNothing() {
    console.log('oi');
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-filmes-detail',
  templateUrl: './filmes-detail.component.html',
  styleUrls: ['./filmes-detail.component.css']
})
export class FilmesDetailComponent implements OnInit {

id: number;
movie: Movie;
inscrição: Subscription;
  constructor(private route: ActivatedRoute,
              private movieService: MoviesService,
              private router: Router) {}

  ngOnInit() {
    this.inscrição = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });

    this.movie = this.movieService.getMovie(this.id);

    if (this.movie == null) {
      this.router.navigate(['/filmes']);
      window.alert('filme não encontrado');
    }
  }



}

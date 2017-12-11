import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filmes-detail',
  templateUrl: './filmes-detail.component.html',
  styleUrls: ['./filmes-detail.component.css']
})
export class FilmesDetailComponent implements OnInit {

id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}

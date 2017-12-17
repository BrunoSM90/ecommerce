import { SeriesService } from './../../services/series.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  id: number;
  serie: any;
  inscrição: Subscription;

  constructor(private route: ActivatedRoute,
              private seriesService: SeriesService,
              private router: Router

  ) { }

  ngOnInit() {
    this.inscrição = this.route.params.subscribe((params: any) =>
      this.id = params['id']
    );

    this.serie = this.seriesService.getSerie(this.id);

    if (this.serie.id == null) {
        this.router.navigate(['']);
    }
  }

}

import { SeriesService } from './../../services/series.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

  id: number;
  serie: any;

  constructor(private route: ActivatedRoute,
              private seriesService: SeriesService

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.serie = this.seriesService.getSerie(this.id);
  }

}

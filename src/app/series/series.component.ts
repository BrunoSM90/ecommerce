import { SeriesService } from './../services/series.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesFilter = '';
  series_List: string[];

  constructor( private seriesService: SeriesService ) { }

  ngOnInit() {

    this.getSeriesList();
  }

  getSeriesList() {
    this.series_List = this.seriesService.getSeries();
  }

}

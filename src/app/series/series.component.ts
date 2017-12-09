import { SeriesService } from './../services/series.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series_List: string[];

  constructor( private seriesService: SeriesService ) { }

  ngOnInit() {

    this.getList();

  }

  getList() {
    this.series_List = this.seriesService.getSeries();
  }

}

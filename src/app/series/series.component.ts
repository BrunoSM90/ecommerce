import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SeriesService } from '../shared/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesFilter = '';
  series_List: string[];

  constructor( private seriesService: SeriesService, private modalService: NgbModal ) { }

  ngOnInit() {

    this.getSeriesList();
  }

  getSeriesList() {
    this.series_List = this.seriesService.getSeries();
  }

}


import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Serie} from '../../../../interfaces/serie';
import {MarvelService} from '../../../../services/marvel.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  public series$: Observable<Serie[]>;

  constructor(
    public marvel: MarvelService
  ) {
  }

  ngOnInit() {
    this.series$ = this.marvel.onGetSeries();
  }

}

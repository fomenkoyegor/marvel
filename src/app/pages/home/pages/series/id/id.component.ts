import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Serie} from '../../../../../interfaces/serie';
import {MarvelService} from '../../../../../services/marvel.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {
  public serie$: Observable<Serie>;

  constructor(
    public marvel: MarvelService,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serie$ = this.marvel.onGetSerie(params.id);
    });
  }

}

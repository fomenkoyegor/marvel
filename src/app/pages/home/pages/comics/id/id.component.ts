import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Comic} from '../../../../../interfaces/comic';
import {MarvelService} from '../../../../../services/marvel.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {
  public comic$: Observable<Comic>;

  constructor(
    public marvel: MarvelService,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.comic$ = this.marvel.onGetComic(params.id);
    });
  }

}

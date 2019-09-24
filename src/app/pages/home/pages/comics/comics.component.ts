import {Component, OnInit} from '@angular/core';
import {MarvelService} from '../../../../services/marvel.service';
import {Observable} from 'rxjs';
import {Comic} from '../../../../interfaces/comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  public comics$: Observable<Comic[]>;

  constructor(
    public marvel: MarvelService
  ) {
  }

  ngOnInit() {
    this.comics$ = this.marvel.onGetComics();
  }

}

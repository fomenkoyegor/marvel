import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MarvelService} from '../../../../services/marvel.service';
import {Storie} from '../../../../interfaces/storie';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  public stories$: Observable<Storie[]>;

  constructor(
    public marvel: MarvelService
  ) {
  }

  ngOnInit() {
    this.stories$ = this.marvel.onGetStories();
  }

}

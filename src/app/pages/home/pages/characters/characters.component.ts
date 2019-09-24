import {Component, OnInit} from '@angular/core';
import {MarvelService} from '../../../../services/marvel.service';
import {Observable} from 'rxjs';
import {Character} from '../../../../interfaces/character';
import {getImage} from '../../../../functions';
import {Thumbnail} from '../../../../interfaces/marvel-entity';

@Component({
  selector: 'app-charcters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public $characters$: Observable<Character[]>;

  constructor(private marvel: MarvelService) {
  }

  ngOnInit() {
    this.onGetCharachters();
  }

  public onGetCharachters(): void {
    this.$characters$ = this.marvel.onGetCharacters();
  }

  getImage(thumbnail: Thumbnail) {
    return getImage(thumbnail);
  }
}

import {Component, OnInit} from '@angular/core';
import {MarvelService} from '../../../../services/marvel.service';
import {Observable} from 'rxjs';
import {Character} from '../../../../interfaces/character';

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

}

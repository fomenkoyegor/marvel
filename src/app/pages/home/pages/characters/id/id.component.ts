import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MarvelService} from '../../../../../services/marvel.service';
import {ActivatedRoute} from '@angular/router';
import {Character} from '../../../../../interfaces/character';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {
  public character$: Observable<Character>;

  constructor(
    public marvel: MarvelService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.onGetCharacter(params.id);
    });
  }

  public onGetCharacter(id): void {
    this.character$ = this.marvel.onGetCharacter(id);
  }

}

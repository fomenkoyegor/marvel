import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Storie} from '../../../../../interfaces/storie';
import {MarvelService} from '../../../../../services/marvel.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {
  public storie$: Observable<Storie>;

  constructor(
    public marvel: MarvelService,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.storie$ = this.marvel.onGetStorie(params.id);
    });
  }

}

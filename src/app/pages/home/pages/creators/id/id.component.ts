import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Creator} from '../../../../../interfaces/creator';
import {MarvelService} from '../../../../../services/marvel.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {
  public creator$: Observable<Creator>;

  constructor(
    public marvel: MarvelService,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.creator$ = this.marvel.onGetCreator(params.id);
    });
  }

}

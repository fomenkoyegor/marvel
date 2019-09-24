import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Event} from '../../../../../interfaces/event';
import {MarvelService} from '../../../../../services/marvel.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {
  public event$: Observable<Event>;

  constructor(
    public marvel: MarvelService,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.event$ = this.marvel.onGetEvent(params.id);
    });
  }

}

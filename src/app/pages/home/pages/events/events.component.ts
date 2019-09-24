import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MarvelService} from '../../../../services/marvel.service';
import {Event} from '../../../../interfaces/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public events$: Observable<Event[]>;

  constructor(
    public marvel: MarvelService
  ) {
  }

  ngOnInit() {
    this.events$ = this.marvel.onGetEvents();
  }

}

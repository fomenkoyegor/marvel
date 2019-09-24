import {Component, OnInit} from '@angular/core';
import {MarvelService} from '../../../../services/marvel.service';
import {Observable} from 'rxjs';
import {Creator} from '../../../../interfaces/creator';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {
  public creators$: Observable<Creator[]>;

  constructor(
    public marvel: MarvelService
  ) {
  }

  ngOnInit() {
    this.creators$ = this.marvel.onGetCreators();
  }

}

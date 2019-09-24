import {Component, OnInit} from '@angular/core';
import {MarvelLinks} from '../../interfaces/marvel-links.enum';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public links = [
    MarvelLinks.characters,
    MarvelLinks.comics,
    MarvelLinks.creators,
    MarvelLinks.events,
    MarvelLinks.series,
    MarvelLinks.stories,
  ];

  constructor() {
  }

  ngOnInit() {

  }

}

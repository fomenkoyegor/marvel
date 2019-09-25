import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../interfaces/character';
import {Comic} from '../../interfaces/comic';
import {Event} from '../../interfaces/event';
import {Serie} from '../../interfaces/serie';
import {Storie} from '../../interfaces/storie';
import {Creator} from '../../interfaces/creator';
import {getResorceName} from '../../functions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: Character | Comic | Event | Serie | Storie | Creator;
  public url: string;
  public resourse: string;

  constructor() {
  }

  ngOnInit() {
    if (this.item.resourceURI) {
     this.resourse = getResorceName(this.item);
     this.url = `/home/${this.resourse}/${this.resourse}/${this.item.id}`;
    }
  }

}

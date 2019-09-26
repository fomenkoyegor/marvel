import {Component, Input, OnInit} from '@angular/core';
import {getResorceName} from '../../functions';
import {Base} from '../../interfaces/marvel-entity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: Base;
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

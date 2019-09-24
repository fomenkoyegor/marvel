import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../interfaces/marvel-entity';
import {getResorceName} from '../../functions';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() items: Item[];
  public resourceName: string;
  public isOpen: boolean;

  constructor() {
  }

  ngOnInit() {
    if (this.items.length) {
      this.resourceName = getResorceName(this.items[0]);
    }
  }

}

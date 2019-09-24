import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../interfaces/marvel-entity';
import {Router} from '@angular/router';
import {getId, getResorceName} from '../../functions';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public link: string;

  constructor(
    public router: Router
  ) {
  }

  ngOnInit() {
    this.link = `/home/${getResorceName(this.item)}/${getResorceName(this.item)}/${getId(this.item)}`;
  }


}

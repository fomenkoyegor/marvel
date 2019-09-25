import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import { ItemComponent } from './item/item.component';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [HeaderComponent, ItemsComponent, ItemComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    ItemsComponent,
    MatButtonModule,
    CardComponent,
    MatCardModule
  ]
})
export class ComponentsModule {
}

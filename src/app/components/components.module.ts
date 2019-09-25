import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import { ItemComponent } from './item/item.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, ItemsComponent, ItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    ItemsComponent,
    MatButtonModule
  ]
})
export class ComponentsModule {
}
